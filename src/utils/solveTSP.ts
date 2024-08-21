import { AntColony, HillClimbing, SimulatedAnnealing } from "../lib";
import { TAlgorithms, TCoords, TData } from "../types";

type AlgorithmParams =
  | {
      generations: number;
      beta: number;
      t0?: undefined;
    }
  | {
      t0: number;
      generations?: undefined;
      beta?: undefined;
    }
  | undefined;

export const solveTSP = (
  coordinates: TCoords,
  algorithm: TAlgorithms,
  algorithmParams: AlgorithmParams
): TData => {
  console.log(coordinates);
  console.log(algorithm);
  console.log(algorithmParams);

  let res = {} as TData;

  switch (algorithm) {
    case TAlgorithms.Hill_Climbing: {
      const agent = new HillClimbing();
      const citiesCoord = agent.readRoutesFromList(coordinates);
      console.log(citiesCoord);
      console.log(agent.getRoutesCosts());
      res = agent.run();
      console.log(res);
      return res;
    }
    case TAlgorithms.Simulated_Annealing: {
      const agent = new SimulatedAnnealing(algorithmParams?.t0);
      const citiesCoord = agent.readRoutesFromList(coordinates);
      console.log(citiesCoord);
      console.log(agent.getRoutesCosts());
      res = agent.run();
      console.log(res);
      return res;
    }
    case TAlgorithms.Ant_Colony: {
      const agent = new AntColony(
        algorithmParams?.generations,
        algorithmParams?.beta
      );
      const citiesCoord = agent.readRoutesFromList(coordinates);
      console.log(citiesCoord);
      console.log(agent.getRoutesCosts());
      res = agent.run();
      console.log(res);
      return res;
    }
  }
};
