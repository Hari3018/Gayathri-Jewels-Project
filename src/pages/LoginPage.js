import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';  // in your LoginPage.js

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API request to login endpoint
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      // Check if response is successful and store the JWT token in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        navigate('/'); // Redirect to Home or Dashboard after login
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error);
      alert(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const goToSignup = () => {
    navigate('/signup'); // Redirect to Signup page
  };

  return (
    <div className="login-page">
  <div className="login-container">
    <h1>WELCOME BACK</h1>
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
    <p>
      Don't have an account?{' '}
      <span onClick={goToSignup}>Sign up here</span>
    </p>
  </div>
</div>

  );
};

export default LoginPage;
