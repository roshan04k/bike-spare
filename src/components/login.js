import React, { useState } from 'react';
import './Login.css'; // Ensure you have appropriate styles
import { auth } from '../FirebaseConfig'; // Import the Firebase auth instance
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign in with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Login successful:', user);

      // Redirect to the main page
      window.location.href = "/main"; // Adjust this URL as per your app's routing
    } catch (error) {
      setError('Invalid email or password!'); // Display error message
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <button type="submit">Login</button>
        </div>
        <p className="signup-link">
          Don't have an account? <a href="/Signup">Sign up</a>
        </p>
        <p className='signup-link'><a href='/admin'>Admin Login--!</a></p>
      </form>
    </div>
  );
};

export default Login;
