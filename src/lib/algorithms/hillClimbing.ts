import { TData } from "../../types";
import { chooseRandomNode } from "../../utils/chooseRandomNode";
import { TSPBase } from "../TSPBase";

export class HillClimbing extends TSPBase {
  /**
   * HillClimbing class for using Hill Climbing (steepest ascent version) to solve the Traveling Salesman Problem.
   *
   * Attributes:
   * simulations: Number representing the number of simulations the algorithm will run.
   */
  private simulations: number;

  constructor(simulations: number = 100) {
    super();
    this.simulations = simulations; // 100 by default
  }

  /**
   * Generates an initial path.
   * @returns The initial path.
   */
  private generateInitPath(): number[] {
    const allCities = this.getCitiesCoord();
    const nodes = Array.from({ length: allCities.length }, (_, i) => i + 1);
    const initPath: number[] = [];

    while (initPath.length !== allCities.length) {
      const randNode = chooseRandomNode(nodes);
      if (!initPath.includes(randNode)) {
        initPath.push(randNode);
      }
    }

    initPath.push(initPath[0]);
    return initPath;
  }

  /**
   * Generates a random path based on the current path.
   * @param currentPath The current path.
   * @param k The number of nodes to keep from the current path.
   * @returns The random path.
   */
  private generateRandomPath(currentPath: number[], k: number): number[] {
    const allCities = this.getCitiesCoord();
    const nodes = Array.from({ length: allCities.length }, (_, i) => i + 1);
    const randomPath = currentPath.slice(0, k);

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
   * Steepest ascent Hill Climbing algorithm to solve the TSP.
   * @returns A tuple containing the minimum cost and the best path.
   */
  run(): TData {
    const simulations = Array.from({ length: this.simulations }, (_, i) => i);
    const costs: number[] = [];
    const pathes: number[][] = [];
    const startTime = Date.now();

    console.log("------------ solving TSP with steepest ascent ------------");
    for (let i = 0; i < this.simulations; i++) {
      let initPath = this.generateInitPath();
      let x0 = this.calcPathCost(initPath);

      const randomPathsCosts: number[] = [];
      const randomPaths: number[][] = [];
      randomPaths.push(initPath);

      const citiesNum = this.getCitiesCoord().length;
      for (let k = 1; k < citiesNum; k++) {
        const randomPath = this.generateRandomPath(initPath, k);
        if (!randomPaths.includes(randomPath)) {
          randomPaths.push(randomPath);
          const x1 = this.calcPathCost(randomPath);
          randomPathsCosts.push(x1);
        }
      }

      const minCost = Math.min(...randomPathsCosts);
      const bestPathIdx = randomPathsCosts.indexOf(minCost);
      const bestPath = randomPaths[bestPathIdx];

      if (minCost < x0) {
        x0 = minCost;
        initPath = bestPath;
      }

      costs.push(minCost);
      pathes.push(bestPath);
    }

    const bestCost = Math.min(...costs);
    const bestPathIdx = costs.indexOf(bestCost);
    const bestPath = pathes[bestPathIdx];
    const chartSimulations = simulations.filter((_, idx) => idx % 9 === 0);
    const chartCosts = costs.filter((_, idx) => idx % 9 === 0);

    const duration = ((Date.now() - startTime) / 1000).toFixed(3);

    console.log(`--------- ${duration} seconds ---------\n\n`);

    const data = {
      bestPath,
      bestCost,
      time: duration,
      chart: { x: chartSimulations, y: chartCosts },
    };

    return data;
  }
}
