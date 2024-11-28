import Link from "next/link";
import { Award } from "lucide-react";
const Navbar2 = () => (
  <div className="py-2 px-4 bg-indigo-50 text-black">
    <div className="container mx-auto gap-4 flex justify-between items-center">
      <h1 className="text-2xl font-mono font-extrabold flex items-center justify-center gap-2 text-[#283593]">
        <Award className="h-7 w-7 text-[#283593]" />
        <Link href="/">Certify</Link>
      </h1>
      <div className="flex gap-4">
        <Link href="/">Dashboard</Link>
        <Link href="/query-sbt">Query Certificate</Link>
        <Link href="/ownership-check">Ownership Checker</Link>
        <Link href="/all-sbt">All id</Link>
        <Link href="/transfer-sbt">Transfer SBt id</Link>
        <Link href="/mint-sbt">Mint SBt</Link>
      </div>
      <button className="bg-zinc-950 border-2 text-white font-mono rounded-2xl py-3 px-5">
        <Link href="">Connected</Link>
      </button>
    </div>
  </div>
);

export default Navbar2;
