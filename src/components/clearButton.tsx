import { useCoordinatesStore } from "../store/coordinatesStore";

export default function ClearButton() {
  const coordinates = useCoordinatesStore((state) => state.gridCoordinates);
  const clearGrid = useCoordinatesStore((state) => state.clearGrid);

  return (
    <button
      onClick={() => clearGrid()}
      disabled={coordinates.length ? false : true}
      type="button"
      className="w-full py-3 px-5 bg-zinc-700 text-white hover:bg-zinc-800 font-semibold disabled:bg-zinc-400"
    >
      Clear Grid
    </button>
  );
}
