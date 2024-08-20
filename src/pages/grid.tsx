import { useEffect, useState } from "react";
import { createInitGrid } from "../utils/initGrid";
import { TCoords, TNode } from "../types";

export default function Grid() {
  const [initGrid, setInitGrid] = useState<TCoords[]>();

  useEffect(() => {
    setInitGrid(createInitGrid());
  }, []);

  const toggleSelect = (node: TNode) => {
    console.log(node);
  };

  return (
    <main className="m-1">
      {initGrid &&
        initGrid.map((row, rowIdx) => {
          return (
            <div key={rowIdx} className="flex">
              {row.map((node) => {
                return (
                  <div
                    key={`${node[0]}${node[1]}`}
                    className="w-6 min-w-6 h-6 min-h-6 bg-white ring-1 ring-teal-400"
                    onClick={() => toggleSelect(node)}
                  ></div>
                );
              })}
            </div>
          );
        })}
    </main>
  );
}
