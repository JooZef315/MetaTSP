import { useCoordinatesStore } from "../store/coordinatesStore";
import { TNode } from "../types";

type PropsType = {
  node: TNode;
  toggleSelectNode: (node: TNode) => void;
  isSelected: boolean;
};

export default function NodeCell({
  node,
  toggleSelectNode,
  isSelected,
}: PropsType) {
  const coordinates = useCoordinatesStore((state) => state.gridCoordinates);
  return (
    <div
      key={`${node[0]}${node[1]}`}
      className={`w-6 min-w-6 h-6 min-h-6 text-center text-white text-sm hover:cursor-pointer ${
        isSelected
          ? "bg-teal-400 ring-1 ring-white"
          : "bg-white ring-1 ring-teal-400"
      }`}
      onClick={() => toggleSelectNode(node)}
    >
      {isSelected &&
        coordinates.findIndex((c) => c[0] == node[0] && c[1] == node[1]) + 1}
    </div>
  );
}
