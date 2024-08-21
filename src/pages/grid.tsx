import { useEffect, useState } from "react";
import { createInitGrid } from "../utils/initGrid";
import { TCoords } from "../types";
import GridView from "../components/gridView";

export default function Grid() {
  const [initGrid, setInitGrid] = useState<TCoords[]>([]);

  useEffect(() => {
    setInitGrid(createInitGrid());
  }, []);

  return (
    <main className="m-1">{initGrid && <GridView initGrid={initGrid} />}</main>
  );
}
