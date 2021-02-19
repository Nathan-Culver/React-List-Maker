import React from 'react';
import './App.css';

import Main from './Components/Main/Main.js'
import Nav from './Components/Nav/Nav.js';
import Footer from './Components/Footer/Footer.js';

import { ContextProvider } from './ContextProvider.js';

function App() {
    
  return (
    <div className='App'>
      <ContextProvider>
        <Nav />
        <Main />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;