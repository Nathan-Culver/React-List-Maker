import React, { useState, useReducer } from 'react';
import './App.css';
import Form from './Components/Main/Form.js';
import Lists from './Components/Main/Lists.js';
import { ACTIONS } from './ACTIONS.js'
import { listReducer } from './ListReducer.js'

// import Nav from './Components/Nav/Nav.js';
// import Footer from './Components/Footer/Footer.js';

const initialState = [];

function App() {

  const [lists, dispatch] = useReducer(listReducer, initialState);
  const [switchBtn, setSwitchBtn] = useState(false)
  const [listName, setListName] = useState('') 

  const handleClose = e => {
      setSwitchBtn(!switchBtn)
  }

  const handleOnChange = e => {
    setListName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_LIST, payload: { switchBtn, setSwitchBtn, listName: listName, newTodo } })
    setListName('')
  }

  function newTodo(listName) {
    return { id: Date.now(), listName: listName }
  }
    
  return (
    <div className="App">
            {
              switchBtn === false ?
                  <button onClick={handleClose}>Add List</button>
              :
              <Form 
                handleOnChange={handleOnChange} 
                handleSubmit={handleSubmit} 
              />
            }
            {lists.map(list => (
              <Lists 
                key={list.id} 
                list={list} 
                dispatch={dispatch} 
              />
            ))}
    </div>
  );
}

export default App;