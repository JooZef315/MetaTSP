import { TSPBase } from "../TSPBase";

export class SimulatedAnnealing extends TSPBase {
  /**
   * SimulatedAnnealing class for using Simulated Annealing to solve the Traveling Salesman Problem.
   *
   * Attributes:
   * simulations: Number representing the number of simulations the algorithm will run.
   * T0: Number representing the initial temperature variable the algorithm will use.
   */
  private simulations: number;
  private T0: number;

  constructor(T0: number = 100) {
    super();
    this.T0 = T0; // 100 by default
    this.simulations = T0; // 100 by default
  }

  /**
   * Cooling function that decreases the temperature over iterations.
   * @param k Iteration number.
   * @returns The temperature after cooling.
   */
  coolingFun(k: number): number {
    const n = 1;
    const T = Math.max(this.T0 - n * k, 0);
    return T;
  }

  /**
   * Generates an initial path.
   * @returns The initial path.
   */
  generateInitPath(): number[] {
    const citiesCoord = this.getCitiesCoord();
    const pathLen = citiesCoord.length;
    const initPath = Array.from({ length: pathLen }, (_, i) => i + 1);
    initPath.push(initPath[0]);
    return initPath;
  }
}
