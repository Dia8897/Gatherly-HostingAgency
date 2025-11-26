import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientHero from "../components/ClientHero";
import ClientSignInSection from "../components/ClientSignInSection";
import ClientEventRequest from "../components/ClientEventRequest";
import ClientEventList from "../components/ClientEventList";

export default function ClientPage() {
  // SIGN-IN STATE
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // EVENT REQUEST STATE
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState("");

  // EVENTS LIST STATE
  const [events, setEvents] = useState([
    {
      id: 1,
      type: "Wedding",
      date: "2026-06-10",
      guests: 150,
      status: "Pending review",
    },
    {
      id: 2,
      type: "Birthday Party",
      date: "2026-03-02",
      guests: 40,
      status: "Confirmed",
    },
    {
      id: 3,
      type: "Corporate Gala",
      date: "2026-09-15",
      guests: 200,
      status: "Under discussion",
    },
  ]);

  // HANDLE SIGN-IN
  const handleSignIn = (e) => {
    e.preventDefault();
    if (!clientName || !email) {
      alert("Please fill your name and email.");
      return;
    }
    setIsSignedIn(true);
  };

  // HANDLE EVENT CREATION
  const handleCreateRequest = (e) => {
    e.preventDefault();

    if (!isSignedIn) {
      alert("Please sign in first.");
      return;
    }

    if (!eventDate || !guests) {
      alert("Please select a date and number of guests.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      type: eventType,
      date: eventDate,
      guests: Number(guests),
      status: "Pending review",
    };

    // add new event to the list
    setEvents((prev) => [...prev, newEvent]);

    // clear form fields
    setEventDate("");
    setGuests("");
  };

  return (
    <>
      <Navbar />

      {/* Background + push under fixed navbar */}
      <div className="bg-gray-100 min-h-screen pt-24 pb-10">
        <main className="max-w-6xl mx-auto px-4">
          {/* HERO */}
          <ClientHero />

                   {/* GRID: Sign-in (left) + event request (right) */}
          <div className="grid gap-8 lg:grid-cols-2 mt-6">
            <ClientSignInSection
              clientName={clientName}
              email={email}
              isSignedIn={isSignedIn}
              onNameChange={setClientName}
              onEmailChange={setEmail}
              onSignIn={handleSignIn}
            />

            <ClientEventRequest
              eventType={eventType}
              eventDate={eventDate}
              guests={guests}
              onTypeChange={setEventType}
              onDateChange={setEventDate}
              onGuestsChange={setGuests}
              onSubmit={handleCreateRequest}
            />
          </div>

          {/* EVENTS LIST */}
          <ClientEventList events={events} />

        </main>
      </div>

      <Footer />
    </>
  );
}
