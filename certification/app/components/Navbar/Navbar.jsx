import Link from "next/link";
import { FileUser } from "lucide-react";
const Navbar = () => (
  <div className="py-3 px-4 bg-white text-black">
    <div className="container mx-auto gap-4 flex justify-between items-center">
      <h1 className="text-2xl font-mono font-extrabold flex items-center justify-center gap-2">
        <FileUser className="h-8 w-8 text-indigo-600" />
        Certify
      </h1>

      <div className="flex flex-wrap rounded-2xl px-1 py-1 appearance-none">
        <ul className="font-medium flex flex-row justify-between w-full transition-colors duration-500 ease-in-out">
          <li className="relative px-4 py-2 mx-2 hover:bg-zinc-950 transition-colors duration-200 ease-in-out hover:text-white rounded-xl font-mono font-bold">
            Home
          </li>
          <li className="relative px-4 py-2 mx-2  hover:bg-zinc-950 transition-colors duration-200 ease-in-out hover:text-white rounded-xl font-mono font-bold">
            How it works
          </li>
          <li className="relative px-4 py-2 mx-2  hover:bg-zinc-950 transition-colors duration-200 ease-in-out hover:text-white rounded-xl font-mono font-bold">
            About
          </li>
        </ul>
      </div>

      <button className="bg-zinc-950 border-2 text-white font-mono transition-colors rounded-2xl py-3 px-5 duration-200 ease-in-out hover:bg-white hover:text-black hover:border-2 hover:border-gray-300">
        <Link href="/dashboard">Get Started</Link>
      </button>
    </div>
  </div>
);

export default Navbar;
