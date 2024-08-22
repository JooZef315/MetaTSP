import { useCoordinatesStore } from "../store/coordinatesStore";
import { TCoords, TNode } from "../types";
import NodeCell from "./nodeCell";

type PropsType = {
  initGrid: TCoords[];
};

export default function GridView({ initGrid }: PropsType) {
  const coordinates = useCoordinatesStore((state) => state.gridCoordinates);
  const placeOnGrid = useCoordinatesStore((state) => state.placeOnGrid);
  const removeFromGrid = useCoordinatesStore((state) => state.removeFromGrid);

  const toggleSelectNode = (node: TNode) => {
    const nodeExisted = coordinates.some(
      (coordinate) => coordinate[0] == node[0] && coordinate[1] == node[1]
    );
    if (nodeExisted) {
      removeFromGrid(node);
    } else {
      placeOnGrid(node);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-6 min-w-6 h-6 min-h-6 text-center text-xs text-teal-400">
          {"*"}
        </div>
        {initGrid.map((_, rowIdx) => {
          return (
            <div
              key={rowIdx}
              className="w-6 min-w-6 h-6 min-h-6 text-center text-xs text-teal-400"
            >
              {rowIdx * 10}
            </div>
          );
        })}
      </div>
      {initGrid.map((row, rowIdx) => {
        return (
          <div key={rowIdx} className="flex">
            <div className=" w-6 min-w-6 h-6 min-h-6 text-center text-xs text-teal-400">
              {rowIdx * 10}
            </div>
            {row.map((node) => {
              const isSelected = coordinates.some(
                (coordinate) =>
                  coordinate[0] == node[0] && coordinate[1] == node[1]
              );
              return (
                <NodeCell
                  key={`${node[0]},${node[1]}`}
                  node={node}
                  toggleSelectNode={toggleSelectNode}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}
