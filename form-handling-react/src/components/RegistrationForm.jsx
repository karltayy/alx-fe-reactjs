import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    console.log('Form Submitted:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username} // Explicitly binding username
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email} // Explicitly binding email
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password} // Explicitly binding password
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
