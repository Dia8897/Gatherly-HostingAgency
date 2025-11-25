import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ClientPage() {
  // SIGN-IN STATE
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // EVENT REQUEST STATE
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState("");

  // RANDOM SAMPLE DATA + NEW REQUESTS
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

    setEvents((prev) => [...prev, newEvent]);

    setEventDate("");
    setGuests("");
  };

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Client Portal</h1>
        <p className="text-gray-600 mb-8">
          Sign in and request your event — we will handle the rest ✨
        </p>

        {/* GRID: Sign-In | Request Form */}
        <div className="grid gap-8 lg:grid-cols-2">
         
          {/* SIGN-IN SECTION */}
          <section className="border rounded-xl p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-4">Sign in as Client</h2>

            <form className="space-y-4" onSubmit={handleSignIn}>
              <div>
                <label className="block text-sm font-medium mb-1">Full name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Nour Haddad"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-3 py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                {isSignedIn ? "Signed in ✔" : "Sign in"}
              </button>

              {isSignedIn && (
                <p className="text-sm text-green-600 mt-2">
                  Signed in as <span className="font-semibold">{clientName}</span>
                </p>
              )}
            </form>
          </section>

          {/* EVENT REQUEST SECTION */}
          <section className="border rounded-xl p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-4">Request a New Event</h2>

            <form className="space-y-4" onSubmit={handleCreateRequest}>
              <div>
                <label className="block text-sm font-medium mb-1">Event type</label>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Birthday Party</option>
                  <option>Corporate Event</option>
                  <option>Graduation</option>
                  <option>Baby Shower</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Event date</label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-3 py-2"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Guests</label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-3 py-2"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  min="1"
                  placeholder="e.g. 120"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Submit event request
              </button>
            </form>
          </section>

        </div>

        {/* EVENT REQUEST LIST */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Your Event Requests</h2>

          {events.length === 0 ? (
            <p className="text-gray-500">No requests yet.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="border rounded-lg p-4 shadow-sm bg-white"
                >
                  <h3 className="text-lg font-semibold mb-1">{ev.type}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Date: <span className="font-medium">{ev.date}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Guests: <span className="font-medium">{ev.guests}</span>
                  </p>
                  <p
                    className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${
                      ev.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {ev.status}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}


