import { ACTIONS } from './ACTIONS.js'

export const listReducer = (lists, action) => {
    switch (action.type) {
        case ACTIONS.ADD_LIST:
            action.payload.setSwitchBtn(!action.payload.switchBtn)
            return [ ...lists, action.payload.newTodo(action.payload.listName)]
        case ACTIONS.DELETE_LIST:
            return lists.filter( list => list.id !== action.payload.id)
        default:
            throw lists
        }
};