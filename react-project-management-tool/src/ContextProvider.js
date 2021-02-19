import React, { useContext, useState, useReducer } from 'react'
import { listReducer } from './ListReducer.js'
import { ACTIONS } from './ACTIONS.js'

const ListsContext = React.createContext();
const DispatchContext = React.createContext();
const SwitchContext = React.createContext();
const HandleCloseContext = React.createContext();
const HandleOnChangeContext = React.createContext();
const HandleSubmitContext = React.createContext();

export function useLists() {
    return useContext(ListsContext)
}

export function useDispatch() {
    return useContext(DispatchContext)
}

export function useSwitch() {
    return useContext(SwitchContext)
}

export function useHandleClose() {
    return useContext(HandleCloseContext)
}

export function useHandleOnChange() {
    return useContext(HandleOnChangeContext)
}

export function useHandleSubmit() {
    return useContext(HandleSubmitContext)
}

export function ContextProvider({ children }) {

    const [lists, dispatch] = useReducer(listReducer, []);
    const [switchBtn, setSwitchBtn] = useState(false);
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
    <ListsContext.Provider value={lists}>
        <DispatchContext.Provider value={dispatch}>
            <SwitchContext.Provider value={switchBtn}>
                <HandleCloseContext.Provider value={handleClose}>
                    <HandleOnChangeContext.Provider value={handleOnChange}>
                        <HandleSubmitContext.Provider value={handleSubmit}>
                                {children}
                        </HandleSubmitContext.Provider>
                    </HandleOnChangeContext.Provider>
                </HandleCloseContext.Provider>
            </SwitchContext.Provider>
        </DispatchContext.Provider>
    </ListsContext.Provider>
)}