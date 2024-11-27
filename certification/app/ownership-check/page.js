"use client"
import { useState } from "react";
import Navbar from "../../src/components/Navbar/Navbar";
import useSBTApi from "../../hooks/userSBT";

export default function OwnershipChecker() {
  const { getSBTByOwner } = useSBTApi();
  const [owner, setOwner] = useState("");
  const [ownership, setOwnership] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    setError("");
    setOwnership(null);
    try {
      const response = await getSBTByOwner(owner);
      if (response.result.success) {
        setOwnership(response.result.result);
      } else {
        setError("No certificate found for this owner.");
      }
    } catch (err) {
      setError("An error occurred while checking ownership.");
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Check Ownership</h2>
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Owner Address"
            className="w-full p-2 border rounded"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <button
            onClick={handleCheck}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Check Ownership
          </button>
        </div>
        {ownership && (
          <div className="mt-6 bg-green-100 p-4 rounded">
            <h3 className="font-bold">Ownership Details:</h3>
            <p><strong>Owner:</strong> {ownership.owner}</p>
            <p><strong>Token ID:</strong> {ownership.tokenID}</p>
            <p><strong>Metadata:</strong> {ownership.metadata}</p>
          </div>
        )}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </main>
    </div>
  );
}
