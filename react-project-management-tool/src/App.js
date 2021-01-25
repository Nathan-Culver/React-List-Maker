import React from 'react';

import './App.css';

import Nav from './Components/Nav/Nav.js';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer.js';

function App() {

  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
