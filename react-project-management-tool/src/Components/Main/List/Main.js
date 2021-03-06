import React from 'react';
import './Main.scss';
import ListForm from './ListForm.js';
import Lists from './Lists.js';
import { 
  useLists, 
  useListDispatch, 
  useListSwitch, 
  useHandleListOnClose, 
  useHandleListOnChange, 
  useHandleListOnSubmit,
} from '../../../ContextProvider.js'

export default function Main() {
  
  const lists = useLists()
  const dispatchList = useListDispatch()
  const listSwitchBtn = useListSwitch()
  const handleListOnClose = useHandleListOnClose()
  const handleListOnChange = useHandleListOnChange()
  const handleListOnSubmit = useHandleListOnSubmit()

  return (
    <div className='container' id='main-container'>
        {lists.map(list => (
            <Lists 
              key={list.id} 
              list={list} 
              dispatchList={dispatchList} 
            />
        ))}
        {
            listSwitchBtn === false ?
                <button className='btn' id='add-list-btn' onClick={handleListOnClose}>Add List</button>
            :
            <ListForm 
              handleListOnChange={handleListOnChange} 
              handleListOnSubmit={handleListOnSubmit} 
              handleListOnClose={handleListOnClose}
            />
        }
    </div>
  );
}