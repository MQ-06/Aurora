import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";
import Contact from "./components/Contact/Contact";
import Dashboard from "../src/pages/Dashboard"; 
import UserProfile from "./pages/UserProfile";
// import Dashboard from "./components/Dashboard/Dashboard";  // ← import Dashboard


const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location.pathname]); // update auth state when route changes

  return (
    <main className="overflow-x-hidden bg-white text-dark scroll-smooth">
      <Routes>
        {/* 🔐 Login & Signup */}
        <Route path="/login" element={<Auth isSignIn={true} setIsSignIn={setIsSignIn} />} />
        <Route path="/signup" element={<Auth isSignIn={false} setIsSignIn={setIsSignIn} />} />

        {/* ✅ Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/profile" element={<UserProfile />} />


        {/* 🏠 Home (Landing Page) */}
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
            </>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />  {/* ← new route */}
        <Route path="/contact" element={<Contact />} />

        {/* 🚫 Catch-all route to redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
};

export default App;
