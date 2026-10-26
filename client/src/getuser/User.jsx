
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../api';
import './User.css';

function User() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadUsers() {
    try {
      setLoading(true);
      setError('');

      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Unable to load users.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function handleDelete(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this user?'
    );

    if (!confirmed) return;

    try {
      await deleteUser(id);

      setUsers((previousUsers) =>
        previousUsers.filter((user) => (user._id || user.id) !== id)
      );
    } catch (err) {
      setError(err.message || 'Unable to delete user.');
    }
  }

  const filteredUsers = users.filter((user) =>
    `${user.name || ''} ${user.email || ''} ${user.address || ''}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="users-page">
      <nav className="topbar">
        <Link to="/" className="brand">
          <span className="brand-icon">U</span>
          <span>Manage<span className="brand-light">Hub</span></span>
        </Link>

        <span className="topbar-label">USER MANAGEMENT</span>
      </nav>

      <section className="users-content">
        <header className="page-heading">
          <div>
            <p className="eyebrow">WORKSPACE / USERS</p>
            <h1>User Directory</h1>
            <p className="page-description">
              Manage your users and keep their information up to date.
            </p>
          </div>

          <Link to="/adduser" className="primary-button">
            <span>＋</span> Add New User
          </Link>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <div>
              <p>Total Users</p>
              <h2>{users.length}</h2>
              <span className="stat-note">Registered accounts</span>
            </div>
            <span className="stat-icon purple">♙</span>
          </article>

          <article className="stat-card">
            <div>
              <p>Search Results</p>
              <h2>{filteredUsers.length}</h2>
              <span className="stat-note">Matching your search</span>
            </div>
            <span className="stat-icon blue">⌕</span>
          </article>
        </section>

        <section className="directory-card">
          <div className="directory-heading">
            <div>
              <h2>All Users</h2>
              <p>View and manage registered users.</p>
            </div>

            <button
              className="refresh-button"
              onClick={loadUsers}
              disabled={loading}
            >
              ↻ Refresh
            </button>
          </div>

          <div className="search-bar">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search by name, email or address..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          {error && (
            <div className="message error-message">
              {error}
            </div>
          )}

          {loading ? (
            <div className="empty-state">Loading users...</div>
          ) : (
            <div className="table-container">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>USER</th>
                    <th>EMAIL ADDRESS</th>
                    <th>ADDRESS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((user) => {
                    const id = user._id || user.id;

                    return (
                      <tr key={id}>
                        <td>
                          <div className="user-profile">
                            <span className="user-avatar">
                              {(user.name || '?')
                                .charAt(0)
                                .toUpperCase()}
                            </span>

                            <span className="user-fullname">
                              {user.name}
                            </span>
                          </div>
                        </td>

                        <td>{user.email}</td>
                        <td>{user.address}</td>

                        <td>
                          <div className="action-buttons">
                            <Link
                              to={`/updateuser/${id}`}
                              className="edit-button"
                            >
                              Edit
                            </Link>

                            <button
                              className="remove-button"
                              onClick={() => handleDelete(id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {!filteredUsers.length && (
                <div className="empty-state">
                  {search
                    ? 'No users match your search.'
                    : 'No users yet. Add your first user to get started.'}
                </div>
              )}
            </div>
          )}

          <footer className="directory-footer">
            Showing {filteredUsers.length} of {users.length} users
            <span>ManageHub · User Directory</span>
          </footer>
        </section>
      </section>
    </main>
  );
}

export default User;
