import React from "react";

export default function AdminCard({ applicant, onAccept, onReject }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-3">
      <h3 className="font-bold">{applicant.name}</h3>
      <p>{applicant.email}</p>
      <div className="flex gap-2">
        <button
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          onClick={() => onAccept(applicant)}
        >
          Accept
        </button>
        <button
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          onClick={() => onReject(applicant)}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
