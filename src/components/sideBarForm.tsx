import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TAlgorithms, TData } from "../types";
import Loading from "./loading";
import { ValidateInputs } from "../utils/ValidateInputs";
import { useCoordinatesStore } from "../store/coordinatesStore";
import { solveTSP } from "../utils/solveTSP";
import ClearButton from "./clearButton";
import { useNavigate } from "react-router-dom";
import { useDashboardStore } from "../store/dashboardStore";

type PropsType = {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideBarForm({ setIsOpen }: PropsType) {
  const coordinates = useCoordinatesStore((state) => state.gridCoordinates);
  const setDashboardData = useDashboardStore((state) => state.setDashboardData);

  const [algorithm, setAlgorithm] = useState<TAlgorithms>();
  const [generations, setGenerations] = useState<number | undefined>(undefined);
  const [beta, setBeta] = useState<number | undefined>(undefined);
  const [t0, setT0] = useState<number | undefined>(undefined);

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (algorithm && coordinates.length > 1) {
      const params = ValidateInputs(algorithm, generations, beta, t0);
      setLoading(true);

      const data: TData = solveTSP(coordinates, algorithm, params);
      setDashboardData(data);

      setLoading(false);

      if (setIsOpen) {
        setIsOpen(false);
      }

      navigate("/dashboard");
    } else {
      toast.error(
        "You Have to choose an algorithm and select at least 2 nodes!"
      );
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col justify-center items-center gap-3 py-4 px-6"
      >
        <select
          className="w-full py-3 px-5 text-teal-400 ring-1 ring-teal-400 focus:ring-teal-400 focus:outline-none"
          defaultValue={"Select an Algorithm"}
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value as TAlgorithms)}
        >
          <option value="Select an Algorithm" disabled>
            Select an Algorithm
          </option>
          <option value="Hill_Climbing">Hill Climbing</option>
          <option value="Simulated_Annealing">Simulated Annealing</option>
          <option value="Ant_Colony">Ant Colony</option>
        </select>
        {algorithm == TAlgorithms.Ant_Colony && (
          <>
            <div className="w-full">
              <input
                className="w-full py-3 px-5 text-teal-400 ring-1 ring-teal-400 focus:ring-teal-400 focus:outline-none placeholder-teal-400  placeholder-opacity-50"
                type="number"
                name="generations"
                id="generations"
                step="1"
                placeholder="Number of Ants generations"
                value={generations !== undefined ? generations : ""}
                onChange={(e) =>
                  setGenerations(
                    e.target.value ? parseInt(e.target.value) : undefined
                  )
                }
              />
            </div>
            <div className="w-full">
              <input
                className="w-full py-3 px-5 text-teal-400 ring-1 ring-teal-400 focus:ring-teal-400 focus:outline-none placeholder-teal-400 placeholder-opacity-50"
                type="number"
                name="beta"
                id="beta"
                placeholder="Beta"
                value={beta !== undefined ? beta : ""}
                onChange={(e) =>
                  setBeta(e.target.value ? parseInt(e.target.value) : undefined)
                }
              />
            </div>
            <p className="text-center w-4/5 text-teal-500">
              !NOTE: Leave Inputs Empty to use default hyperparameters <br />
              Beta: 5, Generations: 20
            </p>
          </>
        )}
        {algorithm == TAlgorithms.Simulated_Annealing && (
          <>
            <div className="w-full">
              <input
                className="w-full py-3 px-5 text-teal-400 ring-1 ring-teal-400 focus:ring-teal-400 focus:outline-none placeholder-teal-400 placeholder-opacity-50"
                type="number"
                name="T0"
                id="T0"
                step="1"
                placeholder="Initial Temperature (T0)"
                value={t0 !== undefined ? t0 : ""}
                onChange={(e) =>
                  setT0(e.target.value ? parseInt(e.target.value) : undefined)
                }
              />
            </div>
            <p className="text-center w-4/5 text-teal-500">
              !NOTE: Leave Inputs Empty to use default hyperparameters
              <br />
              T0: 100
            </p>
          </>
        )}
        <div className="w-full">
          <button
            type="submit"
            className="w-full py-3 px-5 bg-teal-400 text-white hover:bg-teal-500 font-semibold"
          >
            SOLVE!
          </button>
        </div>
        <div className="w-full">
          <ClearButton setIsOpen={setIsOpen} />
        </div>
      </form>
    </>
  );
}
