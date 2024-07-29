import React, { useState } from 'react';
import './User.css';

function User() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let response = true;

    if (!formData.username) {
      alert('Username is required.');
      response = false;
    }
    if (!formData.email) {
      alert('Email is required.');
      response = false;
    } else if (!formData.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      response = false;
    }
   
    if (!formData.phone || formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      response = false;
    }
    if (!formData.dob || new Date(formData.dob) > new Date()) {
        alert('Invalid date of birth. Date of birth cannot be in the future.');
        response = false;
      }
    return response;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
      closeModal();
      setFormData({
        username: '',
        email: '',
        dob: '',
        phone: ''
      });
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <div className='container'>
      <h1>User Details Modal</h1>
      <button className='btn' onClick={openModal}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id='username'
                required
                value={formData.username}
                onChange={handleChange}
              />
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id='email'
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id='phone'
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id='dob'
                required
                value={formData.dob}
                onChange={handleChange}
              />
              <button type='submit' className='submit-button'>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
