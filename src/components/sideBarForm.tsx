import { FormEvent, useState } from "react";
import { TAlgorithms } from "../types";
import Loading from "./loading";
import { ValidateInputs } from "../utils/ValidateInputs";

type PropsType = {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideBarForm({ setIsOpen }: PropsType) {
  const [algorithm, setAlgorithm] = useState<TAlgorithms>();
  const [generations, setGenerations] = useState<number>();
  const [beta, setBeta] = useState<number>();
  const [t0, setT0] = useState<number>();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const params = ValidateInputs(algorithm, generations, beta, t0);

    //do the algorithm!

    console.log(algorithm);
    console.log(params);
    setLoading(false);
    if (setIsOpen) {
      setIsOpen(false);
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
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value as TAlgorithms)}
        >
          <option value="" disabled selected>
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
                value={generations}
                onChange={(e) => setGenerations(parseInt(e.target.value))}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full py-3 px-5 text-teal-400 ring-1 ring-teal-400 focus:ring-teal-400 focus:outline-none placeholder-teal-400 placeholder-opacity-50"
                type="number"
                name="beta"
                id="beta"
                placeholder="Beta"
                value={beta}
                onChange={(e) => setBeta(parseInt(e.target.value))}
              />
            </div>
            <p className="text-center w-4/5 text-teal-500">
              !NOTE: Leave Inputs Empty to use default hyperparameters
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
                value={t0}
                onChange={(e) => setT0(parseInt(e.target.value))}
              />
            </div>
            <p className="text-center w-4/5 text-teal-500">
              !NOTE: Leave Inputs Empty to use default hyperparameters
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
      </form>
    </>
  );
}
