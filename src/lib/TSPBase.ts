import { TCoords } from "../types";

export class TSPBase {
  /**
   * Generic TravelingSalesman class for reading the paths and
   * calculating the costs.
   *
   * Attributes:
   * citiesCoord: The coordinates of the cities/nodes of the problem.
   * routesCosts: The costs between each cities/nodes of the problem.
   */
  private citiesCoord: TCoords = [];
  private routesCosts: number[][] = [];

  constructor() {}

  /**
   * Reads the routes from a list and stores the coordinates.
   * @param citiesMap Array of arrays of numbers representing the coordinates of cities.
   * @returns The coordinates of the cities.
   */
  readRoutesFromList(citiesMap: TCoords): TCoords {
    this.citiesCoord = citiesMap;
    this.routesCosts = this.citiesCoord.map((city1) =>
      this.citiesCoord.map((city2) =>
        Math.round(Math.hypot(city2[0] - city1[0], city2[1] - city1[1]))
      )
    );
    return this.citiesCoord;
  }

  /**
   * @returns The Cities Coord matrix.
   */
  getCitiesCoord(): TCoords {
    return this.citiesCoord;
  }

  /**
   * Calculates the routes costs using Euclidean distance.
   * @returns The routes costs matrix.
   */
  getRoutesCosts(): number[][] {
    return this.routesCosts;
  }

  /**
   * Calculates the total cost of a given path.
   * @param path Array of numbers representing the path taken.
   * @param routesCosts Array of arrays of numbers representing the costs between cities.
   * @returns The total cost of the path.
   */
  calcPathCost(path: number[]): number {
    const costs = path.slice(0, -1).map((city, i) => {
      const cityFromIdx = city - 1;
      const cityToIdx = path[i + 1] - 1;
      return this.routesCosts[cityFromIdx][cityToIdx];
    });

    return costs.reduce((total, cost) => total + cost, 0);
  }
}
