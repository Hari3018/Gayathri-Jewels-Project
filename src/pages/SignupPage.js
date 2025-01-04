import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css';


const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API request to signup endpoint
      const response = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
      alert('Signup successful!'); // Notify user
      console.log("Signup Response:", response.data); // Debugging
      navigate('/login'); // Redirect to Login page
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error);
      alert(error.response?.data?.message || 'Signup failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page"> {/* Apply the 'signup-page' class */}
      <div className="signup-container"> {/* Apply the 'signup-container' class */}
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
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
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
