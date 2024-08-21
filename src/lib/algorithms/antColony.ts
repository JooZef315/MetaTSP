import { TData } from "../../types";
import { chooseRandomNode } from "../../utils/chooseRandomNode";
import { TSPBase } from "../TSPBase";

export class AntColony extends TSPBase {
  /**
    AntColony class for using AntColony for solving the Travelling salesman problem.

    Attributes:
    *simulations (number) representing the number of simulations the algorithm will run by.        
    *genrations_num (number) representing the number of genrations the algorithm will use.        
    *Beta (number) representing the Beta variable the algorithm will use.        
 */

  private simulations: number;
  private generationsNum: number;
  private beta: number;

  constructor(generationsNum: number = 20, beta: number = 5) {
    super();
    this.simulations = 20; // 20 by default
    this.generationsNum = generationsNum;
    this.beta = beta;
  }

  private rouletteWheel(
    possibleCities: number[],
    probabilities: number[]
  ): number {
    const probabilitiesSum = probabilities.reduce((total, p) => total + p, 0);
    const selectionProbabilities = probabilities.map((p) => {
      return Math.round((p / probabilitiesSum) * 1000) / 1000;
    });
    const rouletteWheel: number[] = [];
    let wheelSum = 0;

    for (const probability of selectionProbabilities) {
      wheelSum += probability;
      rouletteWheel.push(Math.round(wheelSum * 1000) / 1000);
    }

    const r = Math.random() * 0.99;
    const cityToGoProbability = Math.min(...rouletteWheel.filter((p) => r < p));
    const cityIdx = rouletteWheel.indexOf(cityToGoProbability);
    const cityToGo = possibleCities[cityIdx];

    return cityToGo;
  }

  private pickNextCity(path: number[], taw: number[][], beta: number): number {
    const routesCosts = this.getRoutesCosts();
    const cities = Array.from(
      { length: routesCosts.length + 1 },
      (_, i) => i + 1
    ).filter((c) => !path.includes(c));
    const currentCity = path[path.length - 1];
    const alpha = 1;

    let denominator = 0;
    const probabilities: number[] = [];
    console.log("cities: ", cities);
    console.log("currentCity: ", currentCity);
    for (const nextCity of cities) {
      const t = taw[currentCity - 1][nextCity - 1];
      const d = routesCosts[currentCity - 1][nextCity - 1];
      denominator += Math.pow(t, alpha) / Math.pow(d, beta);
    }

    for (const nextCity of cities) {
      const t = taw[currentCity - 1][nextCity - 1];
      const d = routesCosts[currentCity - 1][nextCity - 1];
      const Pij = Math.pow(t, alpha) / Math.pow(d, beta) / denominator;
      probabilities.push(Math.round(Pij * 100000) / 100000);
    }
    console.log("here 4");
    const pickedCity = this.rouletteWheel(cities, probabilities);
    console.log("here 5");
    return pickedCity;
  }

  private updatePheromones(
    paths: number[][],
    tawList: number[][],
    costs: number[]
  ): number[][] {
    const Q = 20;
    const p = 0.9;
    const deltaTaw = costs.map((cost) => Q / cost);
    const newTaw = tawList.map((row) => row.map((taw) => (1 - p) * taw));

    paths.forEach((path, idx) => {
      for (let c = 0; c < path.length - 1; c++) {
        const cityFromIdx = path[c] - 1;
        const cityToIdx = path[c + 1] - 1;
        newTaw[cityFromIdx][cityToIdx] += deltaTaw[idx];
        newTaw[cityToIdx][cityFromIdx] += deltaTaw[idx];
      }
    });

    return newTaw;
  }

  private AS(generationsNum: number, beta: number) {
    const bestCosts: number[] = [];
    const bestPaths: number[][] = [];
    const n = this.getRoutesCosts().length;
    const N = n + 1; // number of ants
    let taw: number[][] = Array(n).fill(Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const r = Math.pow(10, -7) * (Math.floor(Math.random() * 9) + 1);
        taw[i][j] = taw[j][i] = i !== j ? r : 0;
      }
    }

    for (let g = 0; g < generationsNum; g++) {
      const paths = Array.from({ length: N }, () => [] as number[]); //create empty path of each ant

      //Initialize the starting city of each ant
      for (let ant = 0; ant < N; ant++) {
        const startingCity = chooseRandomNode(
          Array.from({ length: n }, (_, i) => i + 1)
        );
        paths[ant].push(startingCity);
      }
      console.log("paths: ", paths);
      for (let i = 0; i < n - 1; i++) {
        for (let k = 0; k < N; k++) {
          console.log("city in order: ", paths[k]);
          const cityQk = this.pickNextCity(paths[k], taw, beta);
          paths[k].push(cityQk);
        }
      }

      paths.forEach((path) => path.push(path[0]));

      const costs = paths.map((path) => this.calcPathCost(path));
      taw = this.updatePheromones(paths, taw, costs);

      const minCost = Math.min(...costs);
      const idx = costs.indexOf(minCost);
      bestCosts.push(minCost);
      bestPaths.push(paths[idx]);
    }
    const bestPathIdx = bestCosts.indexOf(Math.min(...bestCosts));

    const data = {
      bestCostPerGeneration: bestCosts,
      bestPathsPerGeneration: bestPaths,
      bestCost: Math.min(...bestCosts),
      bestPath: bestPaths[bestPathIdx],
    };

    return data;
  }

  run(simulations: number = 20): TData {
    this.simulations = simulations;
    const generations = Array.from(
      { length: this.generationsNum },
      (_, i) => i + 1
    );
    const generationsBest = Array(this.generationsNum).fill(0);
    const startTime = Date.now();

    const bestPathsPerSimulation: number[][] = [];
    const bestCostPerSimulation: number[] = [];

    for (let i = 0; i < this.simulations; i++) {
      const { bestCostPerGeneration, bestCost, bestPath } = this.AS(
        this.generationsNum,
        this.beta
      );
      bestCostPerSimulation.push(bestCost);
      bestPathsPerSimulation.push(bestPath);

      for (let j = 0; j < this.generationsNum; j++) {
        generationsBest[j] += bestCostPerGeneration[j];
      }
    }

    const avgGenerationsBest = generationsBest.map(
      (cost) => cost / this.simulations
    );

    const bestCost = Math.min(...bestCostPerSimulation);
    const bestPathIdx = bestCostPerSimulation.indexOf(bestCost);
    const bestPath = bestPathsPerSimulation[bestPathIdx];
    const duration = ((Date.now() - startTime) / 1000).toFixed(3);

    console.log(`---------- total time : ${duration} s ----------`);

    const data = {
      bestPath,
      bestCost,
      time: duration,
      chart: { x: generations, y: avgGenerationsBest },
    };
    return data;
  }
}
