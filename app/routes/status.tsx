import React from "react";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Loader2, XCircle } from "lucide-react";

const jobApplications = [
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

const Status = () => {
  return (
    <div className="p-8 bg-zinc-50 dark:bg-zinc-900 min-h-screen">
      <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-8">
        🧾 Your Job Applications
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobApplications.map((job, index) => {
          const percentage = Math.round(
            (job.roundsCompleted / job.totalRounds) * 100
          );

          return (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 transition-transform hover:scale-[1.02]"
            >
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">
                {job.title}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                {job.company}
              </p>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">
                Rounds Completed: {job.roundsCompleted} / {job.totalRounds}
              </p>

              <Progress value={percentage} className="h-3 rounded-full" />

              {/* Button showing only % */}
              <button
                className={`mt-3 mb-1 w-full flex items-center justify-center gap-2 px-4 py-1 rounded-full text-sm font-semibold transition-colors
                  ${
                    percentage === 100
                      ? "bg-gray-100 text-gray-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                `}
              >
                {percentage}% Completed
              </button>

              {/* Status below button */}
              <div className="text-sm font-medium mt-1 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                {percentage === 100 ? (
                  <>
                    {job.finalStatus === "Accepted" ? (
                      <>
                        Accepted{" "}
                        <CheckCircle className="w-4 h-4 ml-1 text-green-600" />
                      </>
                    ) : job.finalStatus === "Rejected" ? (
                      <>
                        Rejected{" "}
                        <XCircle className="w-4 h-4 ml-1 text-red-600" />
                      </>
                    ) : (
                      <>
                        Completed{" "}
                        <CheckCircle className="w-4 h-4 ml-1 text-gray-500" />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    In Progress...
                    <Loader2 className="w-4 h-4 ml-1 animate-spin text-yellow-600" />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Status;
