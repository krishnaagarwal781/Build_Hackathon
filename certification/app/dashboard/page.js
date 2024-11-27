// pages/index.js
import Navbar2 from "../components/Navbar/Navbar2";

export default function Dashboard() {
  return (
    <div>
      <Navbar2 />

      <main className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold">
          Welcome to the SBT Certification System
        </h2>
        <p className="mt-4 text-gray-600">
          Use the navigation above to verify certificates or check ownership.
        </p>
      </main>
    </div>
  );
}
