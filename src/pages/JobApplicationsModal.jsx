import React from 'react';

// Dummy applicants data for demonstration
const applicantsData = {
  'Private Equity Analyst': [
    { name: 'Amit Sharma', email: 'amit@example.com', status: 'Pending' },
    { name: 'Priya Singh', email: 'priya@example.com', status: 'Reviewed' },
  ],
  'Hedge Fund Analyst': [
    { name: 'Rahul Verma', email: 'rahul@example.com', status: 'Pending' },
  ],
  'Risk & Compliance Manager': [
    { name: 'Sneha Rao', email: 'sneha@example.com', status: 'Interviewed' },
  ],
  'Portfolio Manager': [],
  'Data Analyst': [
    { name: 'Vikas Kumar', email: 'vikas@example.com', status: 'Pending' },
    { name: 'Anjali Mehta', email: 'anjali@example.com', status: 'Reviewed' },
    { name: 'Suresh Patil', email: 'suresh@example.com', status: 'Interviewed' },
  ],
};

const JobApplicationsModal = ({ jobTitle, onClose }) => {
  const applicants = applicantsData[jobTitle] || [];
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Applications for {jobTitle}</h2>
        <button className="modal-close" onClick={onClose}>X</button>
        {applicants.length === 0 ? (
          <p>No applications found for this job.</p>
        ) : (
          <table className="modal-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((app, idx) => (
                <tr key={idx}>
                  <td>{app.name}</td>
                  <td>{app.email}</td>
                  <td>{app.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default JobApplicationsModal;
