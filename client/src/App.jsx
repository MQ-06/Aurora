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
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";

import { UserProvider, useUser } from "./context/UserContext";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Routes>
      <Route path="/login" element={<Auth isSignIn={true} setIsSignIn={setIsSignIn} />} />
      <Route path="/signup" element={<Auth isSignIn={false} setIsSignIn={setIsSignIn} />} />

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
      <Route path="/" element={
        <>
          <section id="home"><Hero /></section>
          <section id="services"><Services /></section>
          <Banner />
          <Subscribe />
          <Banner2 />
          <Footer />
        </>
      } />
      <Route path="/contact" element={<Contact />} />
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
