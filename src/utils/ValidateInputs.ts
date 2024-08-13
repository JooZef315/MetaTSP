import { toast } from "react-toastify";
import { TAlgorithms } from "../types";
import "react-toastify/dist/ReactToastify.css";

// type Params = {
//     algorithm: TAlgorithms,
//     generations: number | undefined,
//     beta: number | undefined,
//     t0: number | undefined
// }

export const ValidateInputs = (
  algorithm: TAlgorithms | undefined,
  generations: number | undefined,
  beta: number | undefined,
  t0: number | undefined
) => {
  if (generations && generations <= 0) {
    toast.error("generations hyperparameter can't be less than 1");
    return;
  }
  if (beta && beta <= 0) {
    toast.error("beta hyperparameter can't be less than 1");
    return;
  }
  if (t0 && t0 <= 0) {
    toast.error("t0 hyperparameter can't be less than 1");
    return;
  }

  if (algorithm == TAlgorithms.Ant_Colony) {
    return {
      generations: generations || 20,
      beta: beta || 5,
    };
  }
  if (algorithm == TAlgorithms.Simulated_Annealing) {
    return {
      t0: t0 || 100,
    };
  }
};
