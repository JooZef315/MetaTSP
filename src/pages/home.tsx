import Header from "../components/header";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="h-[calc(100vh-76px)] w-11/12 md:w-3/4 mx-auto p-8 flex flex-col justify-center items-start gap-6">
        <h1 className="text-teal-400 font-bold text-3xl">How It Works</h1>
        <section className="w-full flex flex-wrap  items-start">
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <h3 className="text-black text-xl">Choose Your Playground</h3>
            <p className="text-zinc-500 pt-2 italic">
              Select your preferred environment—whether it's a map for
              real-world scenarios or a grid for a more abstract approach.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <h3 className="text-black text-xl">Pin Your Points</h3>
            <p className="text-zinc-500 pt-2 italic">
              Click on the grid or map to place your nodes. These will be the
              key locations or cities your algorithm will work with.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <h3 className="text-black text-xl">Optimize Your Path</h3>
            <p className="text-zinc-500 pt-2 italic">
              Select an algorithm and customize its parameters. Let the app find
              the most efficient route between your points.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
