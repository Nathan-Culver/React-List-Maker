import React from 'react';
import './Main.scss';
import Form from './Form.js';
import Lists from './Lists.js';
import { 
  useLists, 
  useDispatch, 
  useSwitch, 
  useHandleOnClose, 
  useHandleOnChange, 
  useHandleOnSubmit,
} from '../../ContextProvider.js'

export default function Main() {
  
  const lists = useLists()
  const dispatch = useDispatch()
  const switchBtn = useSwitch()
  const handleOnClose = useHandleOnClose()
  const handleOnChange = useHandleOnChange()
  const handleOnSubmit = useHandleOnSubmit()

    return (
    <div className='container' id='main-container'>
        {lists.map(list => (
            <Lists 
              key={list.id} 
              list={list} 
              dispatch={dispatch} 
            />
        ))}
        {
            switchBtn === false ?
                <button className='btn' id='add-list-btn' onClick={handleOnClose}>Add List</button>
            :
            <Form 
              handleOnChange={handleOnChange} 
              handleOnSubmit={handleOnSubmit} 
              handleOnClose={handleOnClose}
            />
        }
    </div>
    );
}