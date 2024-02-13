import React, { useState } from 'react';
import EmployeeInformation from './pages/Employee_information';
import Documentation from './pages/Documentation';
import "./App.css"

function App() {
 
  const [currentSection, setCurrentSection] = useState('personal');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    gender: '',
    notificationPreference: [],
    office: 'MIS - Bengaluru headquarters',
    team: ''
  });

 
  const handleButtonClick = (section) => {
    setCurrentSection(section);
  };

 
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(JSON.stringify(formData));
    
  };

 
  const handleReset = () => {
   
    setFormData({
      name: '',
      email: '',
      country: '',
      gender: '',
      notificationPreference: [],
      office: 'MIS - Bengaluru headquarters',
      team: ''
    });
  };

 
  const handleSave = () => {
   
    console.log(formData);
    
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="header">
          <h2>Employee Profile</h2>
          <h6>Some information about the employee</h6>
          <div className="buttons">
            <button type='submit' onClick={handleSubmit}>Save</button>
            <button type='button' onClick={handleReset}>Reset</button>
          </div>
        </div>
        <form id="onboardingForm" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="buttons">
            {/* Button to switch to the Personal (EmployeeInformation) section */}
            <button type="button" onClick={() => handleButtonClick('personal')}>Personal</button>
            {/* Button to switch to the Documentation section */}
            <button type="button" onClick={() => handleButtonClick('documentation')}>Documents</button>
          </div>
          <hr />
          {/* Render EmployeeInformation if currentSection is 'personal', otherwise render Documentation */}
          {currentSection === 'personal' ? <EmployeeInformation formData={formData} handleInputChange={handleInputChange} handleSave={handleSave} handleReset={handleReset} /> : <Documentation formData={formData} handleInputChange={handleInputChange} handleSave={handleSave} handleReset={handleReset} />}
        </form>
      </div>
    </div>
  );
}

export default App;
