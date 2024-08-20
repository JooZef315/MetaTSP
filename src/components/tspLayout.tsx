import { Outlet } from "react-router-dom";
import SideBar from "./sideBar";

export default function TSPLayout() {
  return (
    <main className="h-[calc(100vh-76px)] flex">
      <div className="basis-1/12 md:basis-1/5">
        <SideBar />
      </div>
      <div className="basis-11/12 max-w-[91.66%] md:basis-4/5 md:max-w-[80%] overflow-scroll">
        <Outlet />
      </div>
    </main>
  );
}
