import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./Pages/EventsPage";
import HomePage from "./Pages/HomePage";
import AdminPage from "./Pages/AdminPage";
import ClientPage from "./Pages/ClientPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/client" element={<ClientPage />} />
      </Routes>
    </Router>
  );
}

export default App;
