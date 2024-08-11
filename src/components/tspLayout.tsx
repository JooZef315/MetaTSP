import { Outlet } from "react-router-dom";
import SideBar from "./sideBar";

export default function TSPLayout() {
  return (
    <main className="flex gap-2">
      <SideBar />
      <Outlet />
    </main>
  );
}
