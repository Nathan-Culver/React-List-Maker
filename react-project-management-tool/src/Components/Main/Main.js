import React from 'react';
import Form from './Form.js';
import Lists from './Lists.js';
import { 
  useLists, 
  useDispatch, 
  useSwitch, 
  useHandleClose, 
  useHandleOnChange, 
  useHandleSubmit,
} from '../../ContextProvider.js'

export default function Main(props) {
  
  const lists = useLists()
  const dispatch = useDispatch()
  const switchBtn = useSwitch()
  const handleClose = useHandleClose()
  const handleOnChange = useHandleOnChange()
  const handleSubmit = useHandleSubmit()

    return (
    <div className='container'>
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