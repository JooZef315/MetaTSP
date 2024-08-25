import { Link } from "react-router-dom";

export default function Header() {
  const backgroundImage =
    "url('https://raw.githubusercontent.com/JooZef315/MetaTSP/main/assets/Designer.png')";
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[calc(100vh-76px)] flex justify-start items-center"
      style={{ backgroundImage }}
    >
      <main className="ml-6 md:ml-[140px] p-8 w-4/5 md:w-1/2 flex flex-col gap-3 text-white">
        <h1 className="w-3/4 md:w-full font-bold text-3xl md:text-4xl my-2">
          Traveling Salesman Problem (TSP) Solver
        </h1>
        <p className="w-3/4 pl-2 md:w-11/12">
          We provide implementations of three metaheuristic algorithms to solve
          the Traveling Salesman Problem (TSP): Steepest Ascent Hill Climbing,
          Simulated Annealing, and Ant Colony Optimization.
        </p>
        <div className="flex gap-3 mt-5">
          <Link
            to={"/MetaTSP/grid"}
            className="bg-teal-400 rounded-3xl py-3 px-6 hover:bg-white hover:text-teal-400"
          >
            Solve on Grid
          </Link>
          <Link
            to={"/MetaTSP/map"}
            className="bg-teal-400 rounded-3xl py-3 px-6 hover:bg-white hover:text-teal-400"
          >
            Solve on Map
          </Link>
        </div>
      </main>
    </div>
  );
}
