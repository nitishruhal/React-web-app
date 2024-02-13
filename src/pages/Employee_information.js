import React from 'react';
import './EmpInfo.css';

const EmployeeInformation = ({ formData, handleInputChange }) => {

  

  return (
    <div className="section employee-information">
      <h3 className="section-title">Employee Information</h3>
      <div className="form-group">
        <label htmlFor="name" className="label">Employee Name*:</label>
        <input type="text" id="name" placeholder="Enter your name" className="input" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="label">Email Id*:</label>
        <input type="email" id="email" placeholder="Enter your work email" className="input" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="country" className="label">Country:</label>
        <select id="country" className="select" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)} required>
          <option value="" disabled>Select Country</option>
          <option value="INDIA">INDIA</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="AUSTRALIA">AUSTRALIA</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label">Gender*:</label>
        <div className="radio-group">
          <label><input type="radio" name="gender" value="male" className="radio" checked={formData.gender === 'male'} onChange={() => handleInputChange('gender', 'male')} required /> Male</label>
          <label><input type="radio" name="gender" value="female" className="radio" checked={formData.gender === 'female'} onChange={() => handleInputChange('gender', 'female')} /> Female</label>
          <label><input type="radio" name="gender" value="other" className="radio" checked={formData.gender === 'other'} onChange={() => handleInputChange('gender', 'other')} /> Other</label>
        </div>
      </div>
      <div className="form-group">
        <label className="label">Notify:</label>
        <div className="checkbox-group">
          <label><input type="checkbox" name="notificationPreference" value="email" className="checkbox" checked={formData.notificationPreference.includes('email')} onChange={(e) => handleInputChange('notificationPreference', e.target.checked ? [...formData.notificationPreference, 'email'] : formData.notificationPreference.filter(item => item !== 'email'))} /> Email</label>
          <label><input type="checkbox" name="notificationPreference" value="sms" className="checkbox" checked={formData.notificationPreference.includes('sms')} onChange={(e) => handleInputChange('notificationPreference', e.target.checked ? [...formData.notificationPreference, 'sms'] : formData.notificationPreference.filter(item => item !== 'sms'))} /> SMS</label>
          <label><input type="checkbox" name="notificationPreference" value="app" className="checkbox" checked={formData.notificationPreference.includes('app')} onChange={(e) => handleInputChange('notificationPreference', e.target.checked ? [...formData.notificationPreference, 'app'] : formData.notificationPreference.filter(item => item !== 'app'))} /> App Notification</label>
        </div>
      </div>
      <div className="form-group">
        <label className="label">Office:</label>
        <input type="text" id="office" value="MIS - Bengaluru headquarters" className="input" readOnly />
      </div>
      <div className="form-group">
        <label htmlFor="team" className="label">Team:</label>
        <input type="text" id="team" placeholder="Enter your team" className="input" value={formData.team} onChange={(e) => handleInputChange('team', e.target.value)} />
      </div>
      
    </div>
  );
};

export default EmployeeInformation;
