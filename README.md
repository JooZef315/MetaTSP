# TSPMeta

### TSP Solver with Metaheuristic Algorithms

This project is an application designed to solve the Traveling Salesman Problem (TSP) using various metaheuristic algorithms. It provides an interactive way for users to explore different algorithms, visualize their performance, and understand their behavior in finding optimal routes for TSP scenarios.

## Features

- **Interactive Playground**: Choose between a grid or map environment to simulate the TSP. This flexibility allows the app to handle both abstract grid-based problems and real-world geographical problems.
- **Node Placement**: Easily place nodes on the grid or map by clicking, representing cities or locations that the algorithm will visit.
- **Algorithm Selection**: Choose from a variety of metaheuristic algorithms, such as Hill Climbing, Simulated Annealing Algorithm and Ant Colony Optimization. Customize their parameters to optimize the route.
- **Real-Time Visualization**: Visualize the algorithm's progress as it works to find the shortest possible route that visits all nodes.

## How It Works

1. **Choose Your Playground**: Select your environment—either a grid for abstract problem-solving or a map for geographical scenarios.
2. **Place Your Nodes**: Click on the grid or map to add nodes representing the cities or locations to be visited.
3. **Run the Algorithm**: Choose a metaheuristic algorithm, adjust its parameters, and run it to see the optimal route it discovers.

## Tech Stack

- **TypeScript**: For type safety and better developer experience.
- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router DOM**: For managing routes and navigation.
- **React Leaflet**: Used for interactive maps.
- **Chart.js**: For visualizing the results of the algorithm.
- **Zustand**: For state management

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/JooZef315/MetaTSP.git
   cd MetaTSP
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:3000) to view it in the browser.

## Usage

- Navigate to the home page and choose either a grid or a map as your playground.
- Click on the playground to set your nodes.
- Select an algorithm from the list and tweak its parameters if necessary.
- Run the simulation to see the optimized path.

## Future Improvements

- Enhanced visual feedback and detailed analysis of algorithm performance.

## License

This project is licensed under the [MIT licensed](LICENSE).
