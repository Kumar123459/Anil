import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryAPI } from '../api';
import CategoryForm from '../components/CategoryForm';

const Dashboard = ({ token, onLogout }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await categoryAPI.getAll(token);
      setCategories(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) {
      return;
    }
    try {
      await categoryAPI.delete(id, token);
      setCategories(categories.filter(cat => cat._id !== id));
    } catch (err) {
      setError('Failed to delete category');
    }
  };

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditingId(null);
  };

  const handleCategorySubmit = async (formData) => {
    try {
      if (editingId) {
        const response = await categoryAPI.update(editingId, formData, token);
        setCategories(categories.map(cat => cat._id === editingId ? response.data : cat));
      } else {
        const response = await categoryAPI.create(formData, token);
        setCategories([response.data, ...categories]);
      }
      handleModalClose();
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-left">
          <h1>📦 Category Dashboard</h1>
        </div>
        <div className="header-right">
          {user && (
            <div className="user-info">
              <p className="username">{user.name}</p>
              <p>{user.email}</p>
            </div>
          )}
          <button className="btn btn-secondary btn-small" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="content-header">
          <h2>My Categories</h2>
          <button className="btn btn-primary btn-small" onClick={() => setShowModal(true)}>
            + Add Category
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading categories...</p>
          </div>
        ) : categories.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <h3>No Categories Yet</h3>
            <p>Click the "Add Category" button to create your first category</p>
          </div>
        ) : (
          <div className="categories-grid">
            {categories.map(category => (
              <div key={category._id} className="category-card">
                <div className="category-image">
                  {category.image ? (
                    <img src={`http://localhost:5000${category.image}`} alt={category.name} />
                  ) : (
                    <span>👕</span>
                  )}
                </div>
                <div className="category-info">
                  <div className="category-name">{category.name}</div>
                  <div className="category-count">{category.itemCount} items</div>
                  <div className="card-actions">
                    <button 
                      className="edit-btn" 
                      onClick={() => {
                        setEditingId(category._id);
                        setShowModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button 
                      className="delete-btn" 
                      onClick={() => handleDelete(category._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal show">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editingId ? 'Edit Category' : 'Add New Category'}</h3>
              <button className="close-btn" onClick={handleModalClose}>×</button>
            </div>
            <CategoryForm
              token={token}
              categoryId={editingId}
              onSubmit={handleCategorySubmit}
              onCancel={handleModalClose}
              categories={categories}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
