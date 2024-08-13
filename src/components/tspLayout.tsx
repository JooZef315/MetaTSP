import { Outlet } from "react-router-dom";
import SideBar from "./sideBar";

export default function TSPLayout() {
  return (
    <main className="flex">
      <div className="basis-1/12 md:basis-1/5">
        <SideBar />
      </div>
      <div className="basis-11/12 md:basis-4/5 bg-slate-400">
        <Outlet />
      </div>
    </main>
  );
}
