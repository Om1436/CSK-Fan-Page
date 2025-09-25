// "use client";
// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { useRouter } from "next/navigation";


// import { useSearchParams } from "next/navigation";

// export default function SquadPage() {
//   const searchParams = useSearchParams();
//     const router = useRouter();
//   const players = JSON.parse(searchParams.get("players") || "[]");
//   const impact = JSON.parse(searchParams.get("impact") || "{}");
//   const creator = searchParams.get("creator") || "";


//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-gradient-to-tr from-yellow-200 via-yellow-100 to-yellow-300 border-2 border-yellow-500 rounded-2xl shadow-xl">
//       <h2 className="text-3xl font-extrabold text-yellow-900 mb-6 text-center">
//         🏏 Chennai Super Kings Playing XI - 2026 🏏
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {players.map((p: any, idx: number) => (
//           <div
//             key={idx}
//             className="relative bg-yellow-400 text-yellow-900 font-bold rounded-xl shadow-lg flex flex-col items-center justify-center py-6 px-4 border-2 border-yellow-600"
//           >
//             <span className="absolute top-2 left-2 text-xs bg-white text-yellow-900 font-bold px-2 py-1 rounded-full shadow">
//               #{idx + 1}
//             </span>
//             <p className="text-lg">{p.name}</p>
//             <div className="flex gap-2 mt-2">
//               {p.isCaptain && (
//                 <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs shadow">
//                   🧢 C
//                 </span>
//               )}
//               {p.isWicketKeeper && (
//                 <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs shadow">
//                   🧤 WK
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 text-center">
//         <p className="text-xl font-bold text-green-800">
//           🚀 Impact Player:{" "}
//           <span className="bg-green-200 px-3 py-1 rounded-full shadow text-green-900">
//             {impact.name}
//           </span>
//         </p>
//       </div>
//       <div className="mt-6 text-center">
//   <button
//     onClick={() => router.push("/")}      
//     className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition"
//   >
//     ⬅ Back to Home
//   </button>
// </div>

//         <div className="mt-6 text-center text-sm text-yellow-900 font-medium">
//   Created by {creator}
// </div>


//     </div>
//   );
// }


"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function SquadPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const players = JSON.parse(searchParams.get("players") || "[]");
  const impact = JSON.parse(searchParams.get("impact") || "{}");
  const creator = searchParams.get("creator") || "";

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-100 via-yellow-50 to-yellow-200 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-900 mb-8 text-center">
        🏏 Chennai Super Kings Playing XI - 2026 🏏
      </h2>
      {/* Creator */}
      <div className="mt-6 text-center text-sm md:text-base text-yellow-900 font-medium">
        Created by {creator}
      </div>

      {/* Players List */}
      <div className="w-full max-w-3xl flex flex-col gap-2">
        {players.map((p: any, idx: number) => (
          <div
            key={idx}
            className="w-full bg-white/90 rounded-lg shadow-md px-4 py-2 flex items-center justify-between hover:shadow-lg transition"
          >
            {/* Number Badge + Name */}
            <div className="flex items-center gap-3">
              <span className="bg-yellow-500 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm">
                {idx + 1}
              </span>
              <span className="font-semibold text-gray-800 text-base md:text-lg flex items-center justify-center">
                {p.name}
              </span>
            </div>

            {/* Roles */}
            <div className="flex gap-1">
              {p.isCaptain && (
                <span className="bg-red-600 text-white px-2 py-0.5 rounded-full text-xs md:text-sm font-medium">
                  🧢 Captain
                </span>
              )}
              {p.isWicketKeeper && (
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs md:text-sm font-medium">
                  🧤 WK
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Impact Player */}
      <div className="mt-10 w-full max-w-3xl bg-green-100 rounded-lg py-3 px-6 shadow-md text-center">
        <p className="text-xl md:text-2xl font-bold text-green-900">
          🚀 Impact Player: {impact.name}
        </p>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
