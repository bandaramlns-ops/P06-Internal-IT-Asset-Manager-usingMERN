
import React, { useState } from 'react';
import './User.css';

function User() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john@gmail.com',
      address: 'Canada',
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@gmail.com',
      address: 'London',
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael@gmail.com',
      address: 'Singapore',
    },
  ]);

  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  function addUser(event) {
    event.preventDefault();

    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      address: address,
    };

    setUsers([...users, newUser]);

    setName('');
    setEmail('');
    setAddress('');
    setShowForm(false);
  }

  function deleteUser(id) {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this user?'
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  }

  const filteredUsers = users.filter((user) =>
    (user.name + ' ' + user.email)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="users-page">
      <div className="users-header">
        <div>
          <p className="users-label">USER MANAGEMENT</p>
          <h1>Our Users</h1>
          <p className="users-description">
            Manage your team members in one place.
          </p>
        </div>

        <button
          className="add-button"
          onClick={() => setShowForm(!showForm)}
        >
          + Add User
        </button>
      </div>

      <div className="users-summary">
        <div className="summary-icon">♙</div>
        <div>
          <p>Total Users</p>
          <h2>{users.length}</h2>
        </div>
      </div>

      {showForm && (
        <form className="user-form" onSubmit={addUser}>
          <h2>Add New User</h2>

          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />

          <div className="form-buttons">
            <button type="submit" className="add-button">
              Save User
            </button>

            <button
              type="button"
              className="cancel-button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="users-card">
        <div className="table-header">
          <div>
            <h2>User Directory</h2>
            <p>View and manage your users.</p>
          </div>

          <input
            className="search-input"
            type="search"
            placeholder="Search users..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>USER</th>
                <th>EMAIL</th>
                <th>ADDRESS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <div className={`user-avatar avatar-${index % 4}`}>
                        {user.name.charAt(0).toUpperCase()}
                      </div>

                      <strong>{user.name}</strong>
                    </div>
                  </td>

                  <td>{user.email}</td>
                  <td>{user.address}</td>

                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteUser(user.id)}
                      aria-label={`Delete ${user.name}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="4" className="empty-message">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          Showing {filteredUsers.length} of {users.length} users
        </div>
      </div>

      <p className="page-footer">
        Made with care · Internal IT Asset Manager
      </p>
    </div>
  );
}

export default User;
