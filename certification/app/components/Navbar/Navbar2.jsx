import Link from "next/link";
import { FileUser } from "lucide-react";
const Navbar2 = () => (
  <div className="p-4 bg-white text-black">
    <div className="container mx-auto gap-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
        <FileUser className="h-8 w-8 text-indigo-600" />
        Certify
      </h1>
      <div className="flex gap-4">
        <Link href="/">Dashboard</Link>
        <Link href="/query-sbt">Query Certificate</Link>
        <Link href="/ownership-check">Ownership Checker</Link>
        <Link href="/all-sbt">All id</Link>
        <Link href="/transfer-sbt">Transfer SBt id</Link>
      </div>
      <button className="bg-zinc-950 border-2 text-white font-mono rounded-full py-3 px-5 hover:rounded-2xl">
        <Link href="/getStarted">Get Started</Link>
      </button>
    </div>
  </div>
);

export default Navbar2;
