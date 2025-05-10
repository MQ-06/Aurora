// services/api.js
const API_BASE_URL = 'http://127.0.0.1:3000/api/v1';

// Sign Up User
export const signUpUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userData }), // user is wrapped correctly here
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errors?.join(', ') || 'Signup failed');
    }

    return data;  // Successfully created user
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;  // Propagate error
  }
};

// Login User
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),  // Directly pass email and password
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    // Assuming JWT token is returned in response
    localStorage.setItem('token', data.token);  // Store token if login is successful

    return data;  // Return the response data (including user info and token)
  } catch (error) {
    console.error('Error during login:', error);
    throw error;  // Propagate the error
  }
};
