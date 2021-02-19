import React from 'react';
import { ACTIONS } from '../../ACTIONS.js'

export default function Lists( props ) {

    return (
    <div className='container'>
        <div>{ props.list.listName }</div>
        <button 
          onClick={() => props.dispatch({ type: ACTIONS.DELETE_LIST, payload: { id: props.list.id } }) } 
        >X</button>
    </div>
    );
}