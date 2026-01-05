import React, { useState, useEffect } from 'react';
import { categoryAPI } from '../api';

const CategoryForm = ({ token, categoryId, onSubmit, onCancel, categories }) => {
  const [name, setName] = useState('');
  const [itemCount, setItemCount] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (categoryId) {
      const category = categories.find(c => c._id === categoryId);
      if (category) {
        setName(category.name);
        setItemCount(category.itemCount);
        if (category.image) {
          setPreview(`http://localhost:5000${category.image}`);
        }
      }
    }
  }, [categoryId, categories]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('itemCount', itemCount);
      if (image) {
        formData.append('image', image);
      }

      await onSubmit(formData);
    } catch (err) {
      setError('Failed to save category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label>Category Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Summer Clothes"
          required
        />
      </div>

      <div className="form-group">
        <label>Item Count *</label>
        <input
          type="number"
          value={itemCount}
          onChange={(e) => setItemCount(e.target.value)}
          placeholder="e.g., 26"
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label>Category Image</label>
        {preview && (
          <div style={{
            marginBottom: '15px',
            width: '100%',
            height: '150px',
            borderRadius: '5px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f0f0f0'
          }}>
            <img 
              src={preview} 
              alt="Preview" 
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
            />
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
          Max 5MB. Formats: JPG, PNG, GIF
        </p>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={onCancel} disabled={loading}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Save Category'}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
