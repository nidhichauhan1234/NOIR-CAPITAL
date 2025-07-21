import React from "react";

const jobs = [
  {
    title: "Frontend Developer",
    company: "NOIR Capital",
  },
  {
    title: "UI/UX Designer",
    company: "NOIR Capital",
  },
];

const AppliedJobsRoute = () => {
  return (
    <div className="min-h-screen bg-[#E5E7EB] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#0A2342] mb-8 border-b-2 border-gray-400 pb-2">
         Applied Jobs
      </h1>

      <ul className="space-y-6">
        {jobs.map((job, index) => (
          <li
            key={index}
            className="bg-[#1F2937] border border-[#374151] rounded-2xl shadow-xl p-6 transition-all hover:scale-[1.01] hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-1">
              {job.title}
            </h2>
            <p className="text-md text-[#FBBF24]">{job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobsRoute;
