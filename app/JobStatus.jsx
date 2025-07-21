import React from "react";

const jobApplications = [
  {
    title: "Frontend Developer",
    company: "NOIR Capital",
    completedRounds: 2,
    totalRounds: 4,
    status: "in_progress",
  },
  {
    title: "Backend Engineer",
    company: "NOIR Capital",
    completedRounds: 1,
    totalRounds: 3,
    status: "in_progress",
  },
  {
    title: "UI/UX Designer",
    company: "NOIR Capital",
    completedRounds: 4,
    totalRounds: 4,
    status: "accepted",
  },
];

const getStatusText = (status) => {
  if (status === "accepted") return "Accepted ✅";
  if (status === "rejected") return "Rejected ❌";
  return "In Progress...";
};

const getStatusColor = (status) => {
  if (status === "accepted") return "bg-green-100 text-green-700";
  if (status === "rejected") return "bg-red-100 text-red-700";
  return "bg-yellow-100 text-yellow-700";
};

const JobStatus = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Applications</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {jobApplications.map((job, index) => {
          const percent = Math.round(
            (job.completedRounds / job.totalRounds) * 100
          );

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border space-y-2"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="mt-2 text-gray-700">
                Rounds Completed: {job.completedRounds} / {job.totalRounds}
              </p>
              <p className="text-sm font-medium text-blue-600">{percent}%</p>
              
              {/* Status Button */}
              <button
                className={`mt-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  job.status
                )}`}
                disabled
              >
                {getStatusText(job.status)}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobStatus;
