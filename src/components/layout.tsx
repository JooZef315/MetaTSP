import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <main className="h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
}
