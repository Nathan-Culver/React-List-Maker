import React, { useContext, useState, useReducer } from 'react'
import { listReducer } from './ListReducer.js'
import { ACTIONS } from './ACTIONS.js'

const ListsContext = React.createContext();
const DispatchContext = React.createContext();
const SwitchContext = React.createContext();
const HandleOnCloseContext = React.createContext();
const HandleOnChangeContext = React.createContext();
const HandleOnSubmitContext = React.createContext();

export function useLists() {
    return useContext(ListsContext)
}

export function useDispatch() {
    return useContext(DispatchContext)
}

export function useSwitch() {
    return useContext(SwitchContext)
}

export function useHandleOnClose() {
    return useContext(HandleOnCloseContext)
}

export function useHandleOnChange() {
    return useContext(HandleOnChangeContext)
}

export function useHandleOnSubmit() {
    return useContext(HandleOnSubmitContext)
}

export function ContextProvider({ children }) {

    const [lists, dispatch] = useReducer(listReducer, []);
    const [switchBtn, setSwitchBtn] = useState(false);
    const [listName, setListName] = useState('') 

    const handleOnClose = () => {
        setSwitchBtn(!switchBtn)
    }
    
    const handleOnChange = e => {
      setListName(e.target.value)
    }
    
    function handleOnSubmit(e) {
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
                <HandleOnCloseContext.Provider value={handleOnClose}>
                    <HandleOnChangeContext.Provider value={handleOnChange}>
                        <HandleOnSubmitContext.Provider value={handleOnSubmit}>
                                {children}
                        </HandleOnSubmitContext.Provider>
                    </HandleOnChangeContext.Provider>
                </HandleOnCloseContext.Provider>
            </SwitchContext.Provider>
        </DispatchContext.Provider>
    </ListsContext.Provider>
)}