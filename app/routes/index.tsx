// app/routes/dashboard.tsx

import "../app.css";
import React from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  roundsCompleted: number;
  totalRounds: number;
  finalStatus?: "Accepted" | "Rejected";
};


export default function DashboardRoute() {
  const appliedJobs: Job[] = [
  { id: 1, title: "Frontend Developer", company: "NOIR Capital", roundsCompleted: 2, totalRounds: 4 },
  { id: 2, title: "Backend Engineer", company: "NOIR Capital", roundsCompleted: 1, totalRounds: 3 },
  { id: 3, title: "UI/UX Designer", company: "NOIR Capital", roundsCompleted: 4, totalRounds: 4, finalStatus: "Accepted" },
];

  const ProgressBar = ({ completed, total }: { completed: number; total: number }) => {
    const percent = Math.round((completed / total) * 100);
    return (
      <div className="w-full bg-noir-gray rounded-full h-2 mt-2">
        <div
          className="bg-noir-gold h-2 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-noir-dark text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-noir-gold">🧾 Your Job Applications</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {appliedJobs.map((job) => {
          const percent = Math.round((job.roundsCompleted / job.totalRounds) * 100);
          const isComplete = job.roundsCompleted === job.totalRounds;

          return (
            <div
              key={job.id}
              className="bg-noir-gray bg-opacity-10 border border-noir-gold p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-noir-gold">{job.title}</h2>
              <p className="text-sm text-gray-300">{job.company}</p>
              <p className="mt-3 text-sm text-gray-200">
                Rounds Completed: <span className="font-medium text-white">{job.roundsCompleted}</span> / {job.totalRounds}
              </p>

              <ProgressBar completed={job.roundsCompleted} total={job.totalRounds} />

              <p className={`text-xs mt-2 font-medium ${isComplete ? (job.finalStatus === "Accepted" ? "text-green-400" : "text-red-400") : "text-yellow-400"}`}>
              {percent}%{" "}
              {isComplete ? (
                job.finalStatus === "Accepted" ? "Accepted ✅" :
                job.finalStatus === "Rejected" ? "Rejected ❌" :
                "Completed"
              ) : "In Progress..."}
            </p>

            </div>
          );
        })}
      </div>
    </div>
  );
}
