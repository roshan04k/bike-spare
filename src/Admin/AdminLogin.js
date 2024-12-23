// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Default admin credentials
  const adminCredentials = {
    email: 'admin@gmail.com',
    password: 'admin@123',
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Check if the entered credentials match the default admin credentials
    if (email === adminCredentials.email && password === adminCredentials.password) {
      navigate('/admindashboard'); // Navigate to admin dashboard on success
    } else {
      setError('Invalid admin credentials!');
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleAdminLogin}>
        <h2>Admin Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
