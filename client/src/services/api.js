// src/services/api.js

const BASE_URL = 'http://127.0.0.1:3000/api/v1';

const hardcodedUser = {
  email: 'testuser@gmail.com',
  password: 'test1234',
  token: 'fakeToken123',
};

export const signUpUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userData }),  // 👈 FIXED HERE
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Signup failed.');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};


export const loginUser = async (userData) => {
  // ✅ Fallback to hardcoded user if matched
  if (
    userData.email === hardcodedUser.email &&
    userData.password === hardcodedUser.password
  ) {
    return { token: hardcodedUser.token };
  }

  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed.');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
