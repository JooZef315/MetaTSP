import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white flex text-center justify-around items-center py-5 mx-auto shadow-md sticky top-0 z-50">
      <h1 className="text-3xl self-center text-black">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-teal-400" : "")}
        >
          TSPMeta
        </NavLink>
      </h1>
      <ul className="flex justify-center items-center text-xl gap-6">
        <li className="hover:text-teal-400">
          <NavLink
            to={"/grid"}
            className={({ isActive }) => (isActive ? "text-teal-400" : "")}
          >
            Grid
          </NavLink>
        </li>
        <li className="hover:text-teal-400">
          <NavLink
            to={"/map"}
            className={({ isActive }) => (isActive ? "text-teal-400" : "")}
          >
            Map
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
