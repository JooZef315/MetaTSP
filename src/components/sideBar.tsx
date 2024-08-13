import { useState } from "react";
import SideBarForm from "./sideBarForm";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[calc(100vh-76px)] flex flex-col items-center gap-2 border-r-2 border-teal-400 shadow-md">
      <div
        className="md:hidden flex flex-col gap-1 hover:cursor-pointer mt-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-1 w-7 bg-teal-400 rounded-md"></div>
        <div className="h-1 w-7 bg-teal-400 rounded-md"></div>
        <div className="h-1 w-7 bg-teal-400 rounded-md"></div>
      </div>
      <div className="hidden md:w-full md:block h-[calc(100vh-76px)]">
        <SideBarForm />
      </div>
      {isOpen && (
        <div className="md:hidden absolute w-[91.66%] h-[calc(100vh-76px)] z-50 left-[calc(8.33%)] top-[76px] flex flex-col justify-center items-center p-8 bg-white">
          <SideBarForm />
        </div>
      )}
    </div>
  );
}
