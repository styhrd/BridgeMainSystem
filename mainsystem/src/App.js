import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome.js';
import Who from './components/Who.js';
import SystemLinks from './components/SystemLinks.js';
import ContactInfo from './components/ContactInfo.js';

function App() {
  const [activePage, setActivePage] = useState('Who');

  return (
    <div className="App">
      <div className='app-cont'>
        <div className='nav'>
          <Welcome />
          <button onClick={() => setActivePage('Who')}>Who Are cWe</button>
          <button onClick={() => setActivePage('SystemLinks')}>System Links</button>
          <button onClick={() => setActivePage('ContactInfo')}>Contact Info</button>
        </div>
        <div className='content-cont'>
          {activePage === 'Who' && <Who />}
          {activePage === 'SystemLinks' && <SystemLinks />}
          {activePage === 'ContactInfo' && <ContactInfo />}
        </div>
      </div>
    </div>
  );
}

export default App;
