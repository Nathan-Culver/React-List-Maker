import React, {useState} from 'react';

import './App.css';

import Nav from './Components/Nav/Nav.js';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer.js';

function App() {

  const [lists, setLists] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Main
          lists={lists}
          setLists={setLists} 
      />
      <Footer />
    </div>
  );
}

export default App;
