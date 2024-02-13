import React from 'react';
import './Doc.css';

const Documentation = ({ formData, handleInputChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      alert('File size exceeds 2MB limit');
      event.target.value = ''; 
    } else {
      
    }
  };

  const handleSave = () => {
  
    console.log(formData);
  };

  return (
    <div className="section">
      <h3>Documentation</h3>
      <div className="form-group">
        <label htmlFor="driversLicense">License:</label>
        <input
          type="file"
          id="driversLicense"
          accept=".pdf"
          onChange={handleFileChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="licenseExpiryDate">License Expiry Date:</label>
        <input type="date" id="licenseExpiryDate" required />
      </div>
      <div className="form-group">
        <label htmlFor="backgroundVerification">BGV Certificate:</label>
        <input
          type="file"
          id="backgroundVerification"
          accept=".png"
          onChange={handleFileChange}
          required
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Documentation;
