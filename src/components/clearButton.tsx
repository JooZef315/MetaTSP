import { useLocation } from "react-router-dom";
import { useCoordinatesStore } from "../store/coordinatesStore";

type PropsType = {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ClearButton({ setIsOpen }: PropsType) {
  const gridCoordinates = useCoordinatesStore((state) => state.gridCoordinates);
  const mapCoordinates = useCoordinatesStore((state) => state.mapCoordinates);
  const clearGrid = useCoordinatesStore((state) => state.clearGrid);
  const clearMap = useCoordinatesStore((state) => state.clearMap);

  const location = useLocation();

  const handleClear = () => {
    if (location.pathname == "/MetaTSP/map") {
      clearMap();
    } else {
      clearGrid();
    }

    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <button
      onClick={handleClear}
      disabled={
        location.pathname == "/MetaTSP/map" && mapCoordinates.length
          ? false
          : location.pathname == "/MetaTSP/grid" && gridCoordinates.length
          ? false
          : true
      }
      type="button"
      className="w-full py-3 px-5 bg-zinc-700 text-white hover:bg-zinc-800 font-semibold disabled:bg-zinc-400"
    >
      Clear Nodes
    </button>
  );
}
