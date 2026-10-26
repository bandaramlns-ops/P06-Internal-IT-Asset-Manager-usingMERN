
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './adduser.css';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    setMessage('User details submitted successfully!');

    setName('');
    setEmail('');
    setAddress('');
  }

  return (
    <div className="add-user-page">
      <div className="add-user-card">
        <Link to="/" className="back-link">
          ← Back to Users
        </Link>

        <div className="add-user-icon">+</div>

        <h1>Add New User</h1>
        <p className="add-user-description">
          Enter the details below to add a new user.
        </p>

        {message && (
          <p className="success-message">{message}</p>
        )}

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>Address</label>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />

          <button type="submit" className="save-user-button">
            Save User
          </button>
        </form>

        <p className="add-user-footer">
          Internal IT Asset Manager
        </p>
      </div>
    </div>
  );
}

export default AddUser;
