"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Player = {
  name: string;
  isCaptain: boolean;
  isWicketKeeper: boolean;
};

type ImpactPlayer = {
  name: string;
};

const initialPlayers: Player[] = Array.from({ length: 11 }, () => ({
  name: "",
  isCaptain: false,
  isWicketKeeper: false,
}));

export default function Playing11Page() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [impactPlayer, setImpactPlayer] = useState<ImpactPlayer>({ name: "" });
  const router = useRouter();
  const [creator, setCreator] = useState<string>(""); 


  const handleNameChange = (index: number, value: string) => {
    setPlayers(players.map((p, i) => (i === index ? { ...p, name: value } : p)));
  };

  const handleCaptainChange = (index: number) => {
    setPlayers(players.map((p, i) => ({ ...p, isCaptain: i === index })));
  };

  const handleWicketKeeperChange = (index: number) => {
    setPlayers(players.map((p, i) => ({ ...p, isWicketKeeper: i === index })));
  };

  const handleImpactPlayerChange = (value: string) => {
    setImpactPlayer({ name: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = new URLSearchParams({
      players: JSON.stringify(players),
      impact: JSON.stringify(impactPlayer),
      creator: creator,
    });
    router.push(`/Playing11/squad?${query.toString()}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 rounded-xl shadow-xl border border-yellow-400">
      <h2 className="text-3xl font-extrabold text-yellow-700 mb-6 text-center">
        🦁 Select Your Playing 11 for 2026
      </h2>
    <div className="flex flex-col items-start gap-2 mb-4">
  <input
    type="text"
    placeholder="Creator Name"
    value={creator}
    onChange={(e) => setCreator(e.target.value)}
    required
    className="w-full px-3 py-2 rounded-md border border-yellow-300 bg-yellow-50 text-yellow-900 font-semibold"
  />
  <span className="text-yellow-800 font-medium">Creator Name</span>
</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {players.map((player, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-3 bg-white/80 rounded-lg p-3 border border-yellow-300 shadow">
            <input
              type="text"
              placeholder={`Player ${idx + 1} Name`}
              value={player.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleNameChange(idx, e.target.value)}
              required
              className="flex-1 px-3 py-2 rounded-md border border-yellow-300 bg-yellow-50 text-yellow-900 font-semibold"
            />
            <label className="flex items-center gap-1 text-yellow-800 font-medium">
              <input
                type="radio"
                name={`captain`}
                checked={player.isCaptain}
                onChange={() => handleCaptainChange(idx)}
                required
                className="accent-yellow-500"
              />
              Captain
            </label>
            <label className="flex items-center gap-1 text-yellow-800 font-medium">
              <input
                type="radio"
                name={`wicketkeeper`}
                checked={player.isWicketKeeper}
                onChange={() => handleWicketKeeperChange(idx)}
                required
                className="accent-yellow-500"
              />
              Wicketkeeper
            </label>
          </div>
        ))}

        <div className="flex flex-col md:flex-row items-center gap-3 bg-white/90 rounded-lg p-3 border border-yellow-400 shadow-md">
          <input
            type="text"
            placeholder="Impact Player Name"
            value={impactPlayer.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleImpactPlayerChange(e.target.value)}
            required
            className="flex-1 px-3 py-2 rounded-md border border-yellow-400 bg-yellow-50 text-yellow-900 font-semibold"
          />
          <span className="text-yellow-800 font-semibold">Impact Player</span>
        </div>


        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg shadow-lg transition"
        >
          Submit Playing 11
        </button>
      </form>
    </div>
  );
}
