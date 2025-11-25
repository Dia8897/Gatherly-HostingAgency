
import React from "react";
import Navbar from "../components/Navbar";
import AdminCard from "../components/AdminCard"; 
import Footer from "../components/Footer";
import AdminHero from "../components/HeroAdmin";

export default function AdminPage() {
  const sampleApplicants = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
  ];

  const handleAccept = (applicant) => {
    console.log("Accepted:", applicant.name);
  };

  const handleReject = (applicant) => {
    console.log("Rejected:", applicant.name);
  };

  return (
    <div>
      <Navbar />
      <main className="p-6">
        {/* <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1> */}
        <AdminHero />
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sampleApplicants.map((applicant, index) => (
            <AdminCard
              key={index}
              applicant={applicant}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
