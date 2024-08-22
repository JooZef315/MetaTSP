import { useCoordinatesStore } from "../store/coordinatesStore";

type PropsType = {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ClearButton({ setIsOpen }: PropsType) {
  const coordinates = useCoordinatesStore((state) => state.gridCoordinates);
  const clearGrid = useCoordinatesStore((state) => state.clearGrid);

  const handleClear = () => {
    clearGrid();
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <button
      onClick={handleClear}
      disabled={coordinates.length ? false : true}
      type="button"
      className="w-full py-3 px-5 bg-zinc-700 text-white hover:bg-zinc-800 font-semibold disabled:bg-zinc-400"
    >
      Clear Grid
    </button>
  );
}
