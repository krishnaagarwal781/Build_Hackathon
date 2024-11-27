// components/Navbar.js
import Link from "next/link";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <div className="container mx-auto gap-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">SBT Certification</h1>
      <div className="flex gap-4">
        <Link href="/">Dashboard</Link>
        <Link href="/query-sbt">Query Certificate</Link>
        <Link href="/ownership-check">Ownership Checker</Link>
        <Link href="/all-sbt">All id</Link>
        <Link href="/transfer-sbt">Transfer SBt id</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
