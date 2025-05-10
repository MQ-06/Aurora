import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
      return;
    }

    // Optional: fetch user data if you have an endpoint like /me
    // For now, just mock the user
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUser({ id: payload.user_id });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Dashboard!</h1>
      {user && <p>User ID: {user.id}</p>}
      <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
