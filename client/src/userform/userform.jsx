
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createUser, getUser, updateUser } from '../api';
import './userform.css';

function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEditing) return;

    async function loadUser() {
      try {
        setError('');

        const result = await getUser(id);
        const user = result.user || result.data || result;

        setForm({
          name: user.name || '',
          email: user.email || '',
          address: user.address || '',
        });
      } catch (err) {
        setError(err.message || 'Unable to load user.');
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [id, isEditing]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError('');
      setSaving(true);

      if (isEditing) {
        await updateUser(id, form);
      } else {
        await createUser(form);
      }

      navigate('/');
    } catch (err) {
      setError(err.message || 'Unable to save user.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="userform-page">
        <div className="form-loading">Loading user details...</div>
      </main>
    );
  }

  return (
    <main className="userform-page">
      <nav className="form-topbar">
        <Link to="/" className="form-brand">
          <span className="form-brand-icon">U</span>
          <span>Manage<span>Hub</span></span>
        </Link>

        <Link to="/" className="form-top-link">
          ← Back to users
        </Link>
      </nav>

      <section className="userform-layout">
        <aside className="form-intro">
          <span className="form-step">USER MANAGEMENT</span>

          <h1>
            {isEditing ? 'Update user details.' : 'Create a new user.'}
          </h1>

          <p>
            {isEditing
              ? 'Keep the user information accurate and up to date.'
              : 'Add a user to your directory with a few simple details.'}
          </p>

          <div className="intro-divider" />

          <div className="intro-tip">
            <span className="tip-icon">✓</span>
            <div>
              <strong>Simple and secure</strong>
              <p>Check your details before saving.</p>
            </div>
          </div>
        </aside>

        <section className="userform-card">
          <div className="form-card-heading">
            <div className="form-heading-icon">
              {isEditing ? '✎' : '+'}
            </div>

            <div>
              <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
              <p>Enter the information below.</p>
            </div>
          </div>

          {error && <div className="form-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. John Silva"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="e.g. Colombo, Sri Lanka"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" disabled={saving}>
                {saving
                  ? 'Saving...'
                  : isEditing
                    ? 'Save Changes  →'
                    : 'Create User  →'}
              </button>

              <Link to="/" className="cancel-link">
                Cancel
              </Link>
            </div>
          </form>

          <p className="form-bottom-note">
            ManageHub <span>·</span> User Directory
          </p>
        </section>
      </section>
    </main>
  );
}

export default UserForm;
