import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-3 p-11 bg-zinc-700 text-zinc-400 ">
      <h1 className="font-semibold text-2xl">TSPMeta</h1>
      <div className="flex gap-2">
        Let's Get in touch!
        <Link to={"https://www.linkedin.com/in/joozef315/"}>
          <FaLinkedin size={28} />
        </Link>
        <Link to={"https://github.com/JooZef315"}>
          <FaGithub size={28} />
        </Link>
      </div>
      <div className="w-4/6 h-[1px] bg-zinc-500 mt-4"></div>
      <p>Copyright ©2024 All rights reserved </p>
    </footer>
  );
}
