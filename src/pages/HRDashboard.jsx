import React, { useState } from 'react';
import JobApplicationsModal from './JobApplicationsModal';

// Dummy data for demonstration
const jobApplications = [
  { jobTitle: 'Private Equity Analyst', applicants: 2 },
  { jobTitle: 'Hedge Fund Analyst', applicants: 1 },
  { jobTitle: 'Risk & Compliance Manager', applicants: 1 },
  { jobTitle: 'Portfolio Manager', applicants: 0 },
  { jobTitle: 'Data Analyst', applicants: 3 },
];

const HRDashboard = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="hr-dashboard-container">
      <h1>HR Dashboard: Job Applications Overview</h1>
      <table className="hr-dashboard-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Number of Applicants</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobApplications.map((job, idx) => (
            <tr key={idx}>
              <td>{job.jobTitle}</td>
              <td>{job.applicants}</td>
              <td>
                <button onClick={() => setSelectedJob(job.jobTitle)} className="view-app-btn">
                  View Applications
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedJob && (
        <JobApplicationsModal jobTitle={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default HRDashboard;
