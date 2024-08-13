import { TData } from "../../types";
import { chooseRandomNode } from "../../utils/chooseRandomNode";
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

  constructor(T0: number) {
    super();
    this.T0 = T0;
    this.simulations = T0;
  }

  /**
   * Cooling function that decreases the temperature over iterations.
   * @param k Iteration number.
   * @returns The temperature after cooling.
   */
  private coolingFun(k: number): number {
    const n = 1;
    const T = Math.max(this.T0 - n * k, 0);
    return T;
  }

  /**
   * Generates an initial path.
   * @returns The initial path.
   */
  private generateInitPath(): number[] {
    const citiesCoord = this.getCitiesCoord();
    const pathLen = citiesCoord.length;
    const initPath = Array.from({ length: pathLen }, (_, i) => i + 1);
    initPath.push(initPath[0]);
    return initPath;
  }

  /**
   * Generates a random path.
   * @returns The random path.
   */
  private generateRandomPath(): number[] {
    const allCities = this.getCitiesCoord();
    const nodes = Array.from({ length: allCities.length }, (_, i) => i + 1);
    const randomPath: number[] = [];

    while (randomPath.length !== allCities.length) {
      const randNode = chooseRandomNode(nodes);
      if (!randomPath.includes(randNode)) {
        randomPath.push(randNode);
      }
    }

    randomPath.push(randomPath[0]);

    return randomPath;
  }

  /**
   * Simulated Annealing algorithm to solve the TSP.
   * @returns A tuple containing the minimum cost and the best path.
   */
  run(): TData {
    let T = this.T0;
    const chartTemperatures: number[] = [];
    const chartCosts: number[] = [];

    console.log("--------- solving TSP with simulated annealing ---------");
    const startTime = Date.now();
    let initPath = this.generateInitPath();
    let minCost = this.calcPathCost(initPath);

    for (let i = 0; i < this.simulations; i++) {
      let x0 = this.calcPathCost(initPath);

      const randomPath = this.generateRandomPath();
      const x1 = this.calcPathCost(randomPath);

      // If minimized
      if (x1 < x0) {
        initPath = [...randomPath];
        x0 = x1;
      } else {
        const r = Math.round(Math.random() * 1000) / 1000;
        const test = (x0 - x1) / T;
        if (r < Math.exp(test)) {
          initPath = [...randomPath];
          x0 = x1;
        }
      }

      T = this.coolingFun(i + 1);

      if (i % 10 === 0) {
        chartTemperatures.push(T);
        chartCosts.push(x0);
      }
      minCost = Math.min(minCost, x0);
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(3);

    console.log(`--------- ${duration} seconds ---------\n\n`);

    const data = {
      bestPath: initPath,
      bestCost: minCost,
      time: duration,
      chart: { x: chartTemperatures, y: chartCosts },
    };

    return data;
  }
}
