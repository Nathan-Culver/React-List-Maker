import React, { useContext, useState, useReducer } from 'react'
import { listReducer } from './ListReducer.js'
import { ACTIONS } from './ACTIONS.js'

const ListsContext = React.createContext();
const ListDispatchContext = React.createContext();
const ListSwitchContext = React.createContext();
const HandleListOnCloseContext = React.createContext();
const HandleListOnChangeContext = React.createContext();
const HandleListOnSubmitContext = React.createContext();

export function useLists() {
    return useContext(ListsContext)
}

export function useListDispatch() {
    return useContext(ListDispatchContext)
}

export function useListSwitch() {
    return useContext(ListSwitchContext)
}

export function useHandleListOnClose() {
    return useContext(HandleListOnCloseContext)
}

export function useHandleListOnChange() {
    return useContext(HandleListOnChangeContext)
}

export function useHandleListOnSubmit() {
    return useContext(HandleListOnSubmitContext)
}

export function ContextProvider({ children }) {

    const [lists, dispatchList] = useReducer(listReducer, []);
    const [listSwitchBtn, setListSwitchBtn] = useState(false);
    const [listName, setListName] = useState('') 

    const handleListOnClose = () => {
        setListSwitchBtn(!listSwitchBtn)
    }
    
    const handleListOnChange = e => {
      setListName(e.target.value)
    }
    
    function handleListOnSubmit(e) {
      e.preventDefault()
      dispatchList({ type: ACTIONS.ADD_LIST, payload: { listSwitchBtn, setListSwitchBtn, listName: listName, newList } })
      setListName('')
    }
    
    function newList(listName) {
      return { id: Date.now(), listName: listName }
    }

return (
    <ListsContext.Provider value={lists}>
        <ListDispatchContext.Provider value={dispatchList}>
            <ListSwitchContext.Provider value={listSwitchBtn}>
                <HandleListOnCloseContext.Provider value={handleListOnClose}>
                    <HandleListOnChangeContext.Provider value={handleListOnChange}>
                        <HandleListOnSubmitContext.Provider value={handleListOnSubmit}>
                            {children}
                        </HandleListOnSubmitContext.Provider>
                    </HandleListOnChangeContext.Provider>
                </HandleListOnCloseContext.Provider>
            </ListSwitchContext.Provider>
        </ListDispatchContext.Provider>
    </ListsContext.Provider>
)}