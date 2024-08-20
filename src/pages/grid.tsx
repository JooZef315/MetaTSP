import { createInitGrid } from "../utils/initGrid";

export default function Grid() {
  const initGrid = createInitGrid();
  return (
    <main className="m-1">
      {initGrid.map((row, rowIdx) => {
        return (
          <div key={rowIdx} className="flex">
            {row.map((_, nodeIdx) => {
              return (
                <div
                  key={`${rowIdx}${nodeIdx}`}
                  className="w-6 min-w-6 h-6 min-h-6 bg-white ring-1 ring-teal-400"
                ></div>
              );
            })}
          </div>
        );
      })}
    </main>
  );
}
