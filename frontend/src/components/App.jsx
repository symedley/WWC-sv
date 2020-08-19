import React from 'react';
import logo from '../images/wip.png';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <div className="App-logo">
          <div className="App-logo-front">
            <img src={logo}  alt="logo" />
          </div>
          <div className="App-logo-back">
            <img src={logo}  alt="logo" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
