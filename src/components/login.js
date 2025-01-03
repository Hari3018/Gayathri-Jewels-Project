// src/pages/Login.js

/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate after login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Example validation (for demonstration purposes)
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // Here you would typically make a request to your backend API for authentication
    const userData = { email, password };
    console.log('Logging in with:', userData);
    
    // For now, we assume the login is successful and navigate to the home page
    setError('');
    navigate('/'); // Navigate to home page after successful login
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;*/
