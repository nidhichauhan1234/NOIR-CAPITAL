import React from "react";
import { Progress } from "@/components/ui/progress";

const jobs = [
  {
    title: "Frontend Developer",
    company: "NOIR Capital",
    roundsCompleted: 2,
    totalRounds: 4,
  },
  {
    title: "Backend Engineer",
    company: "NOIR Capital",
    roundsCompleted: 1,
    totalRounds: 3,
  },
  {
    title: "UI/UX Designer",
    company: "NOIR Capital",
    roundsCompleted: 4,
    totalRounds: 4,
    finalStatus: "Accepted", // or "Rejected"
  },
];

const Dashboard = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: "#20253A" }}>
      <h1 className="text-3xl font-bold text-white mb-8">
      Job Application Status
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => {
          const percent = Math.round(
            (job.roundsCompleted / job.totalRounds) * 100
          );
          const isComplete = percent === 100;

          return (
            <div
              key={index}
              className="bg-[#2A314D] p-6 rounded-2xl shadow-lg border border-[#3C4568] transition-transform hover:scale-[1.02]"
            >
              <h2 className="text-xl font-semibold text-white">{job.title}</h2>
              <p className="text-sm text-gray-300 mb-2">{job.company}</p>
              <p className="text-sm text-gray-400 mb-2">
                Rounds Completed: {job.roundsCompleted} / {job.totalRounds}
              </p>

              <Progress value={percent} className="h-3 rounded-full mb-2" />

              <div className="mt-2">
                <p className="text-sm font-semibold text-yellow-400">
                  {percent}% Completed
                </p>

                {isComplete && (
                  <p
                    className={`text-sm font-medium mt-1 ${
                      job.finalStatus === "Accepted"
                        ? "text-green-400"
                        : job.finalStatus === "Rejected"
                        ? "text-red-400"
                        : "text-gray-400"
                    }`}
                  >
                    {job.finalStatus === "Accepted"
                      ? "Accepted ✅"
                      : job.finalStatus === "Rejected"
                      ? "Rejected ❌"
                      : "Completed"}
                  </p>
                )}

                {!isComplete && (
                  <p className="text-sm font-medium text-gray-400 mt-1">
                    In Progress...
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
