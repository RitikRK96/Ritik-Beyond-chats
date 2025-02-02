import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth/AuthContext";

// Auth Components
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import EmailVerification from "./components/Auth/EmailVerification";

// Organisation Components
import SetupOrganisation from "./components/Organisation/SetupOrganisation";
import ScrapingStatus from "./components/Organisation/ScrapingStatus";

import "./styles/index.css"
// Protected Route and other components...

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email-verification" element={<EmailVerification />} />

        {/* Protected Routes */}
        <Route path="/setup-organisation" element={<SetupOrganisation />} />
        <Route path="/scraping-status" element={<ScrapingStatus />} />

        {/* Default Route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
