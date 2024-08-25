import { CiTimer } from "react-icons/ci";
import { MdOutlineFindInPage } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import DashboardGraph from "../components/dashboardGraph";
import { useDashboardStore } from "../store/dashboardStore";

export default function Dashboard() {
  const DashboardData = useDashboardStore((state) => state.DashboardData);

  return (
    <>
      {!DashboardData ? (
        <p className="h-[calc(100vh-76px)] text-center italic text-zinc-500 mt-5">
          No Data to show! <br />
          Use Map or Grid to solve your TSP and show results
        </p>
      ) : (
        <main className="min-h-[calc(100vh-76px)] flex flex-col justify-center items-stretch gap-5 w-full my-3 p-7">
          <h1 className="self-start font-semibold text-2xl text-teal-400">
            Algorithm Results
          </h1>
          <section className="flex flex-wrap justify-center items-center gap-4">
            <div className="grow flex justify-center items-center gap-2 rounded-xl shadow-lg p-5 bg-zinc-700 text-zinc-400">
              <CiTimer size={32} />
              <h3>
                Solved in <br />
                <span className="text-zinc-300 italic">
                  {DashboardData.time}
                </span>
                {"  Sec."}
              </h3>
            </div>
            <div className="grow flex justify-center items-center gap-2 rounded-xl shadow-lg p-5 bg-teal-400 text-teal-100">
              <MdOutlineFindInPage size={32} />
              <h3>
                Best Cost <br />
                <span className="text-white italic">
                  {DashboardData.bestCost}
                </span>
              </h3>
            </div>
            <div className="grow flex justify-center items-center gap-2 rounded-xl shadow-lg p-5 bg-blue-400 text-blue-100">
              <GiPathDistance size={32} />
              <h3>
                Best Path <br />
                <span className="flex flex-wrap justify-center items-center gap-1 text-white text-center italic font-bold">
                  {DashboardData.bestPath.map((node, idx) => {
                    if (idx == DashboardData.bestPath.length - 1) {
                      return <span key={idx}>{node}</span>;
                    } else {
                      return (
                        <span
                          key={idx}
                          className="flex justify-center items-center text-center gap-1"
                        >
                          {node}
                          <FaArrowRightLong size={16} />
                        </span>
                      );
                    }
                  })}
                </span>
              </h3>
            </div>
          </section>
          <section className="w-full rounded-xl overflow-x-auto">
            <DashboardGraph />
          </section>
        </main>
      )}
    </>
  );
}
