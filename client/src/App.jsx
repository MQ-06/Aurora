import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";
import Contact from "./components/Contact/Contact";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import DisabilityPage from "./pages/DisabilityPage";
import { UserProvider } from "./context/UserContext";
import Chatbot from "./components/Chatbot/Chatbot"; // ✅ Chatbot import

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Auth isSignIn={true} setIsSignIn={setIsSignIn} />}
      />
      <Route
        path="/signup"
        element={<Auth isSignIn={false} setIsSignIn={setIsSignIn} />}
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/"
        element={
          <>
            <section id="home">
              <Hero />
            </section>
            <section id="services">
              <Services />
            </section>
            <Banner />
            <Subscribe />
            <Banner2 />
            <Footer />

            {/* ✅ Only show Chatbot on landing page */}
            <Chatbot />
          </>
        }
      />
      <Route path="/disability/:id" element={<DisabilityPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <UserProvider>
      <main className="overflow-x-hidden bg-white text-dark scroll-smooth">
        <AppRoutes />
      </main>
    </UserProvider>
  );
};

export default App;
