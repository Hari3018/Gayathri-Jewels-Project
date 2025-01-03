// src/pages/SignUp.js  

/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate after signup

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Example validation (for demonstration purposes)
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Here you would typically make a request to your backend API to register the user
    const userData = { name, email, password };
    console.log('Signing up with:', userData);

    // For now, we assume the signup is successful and navigate to the login page
    setError('');
    navigate('/login'); // Navigate to login page after successful signup
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSignUp}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignUp;*/
