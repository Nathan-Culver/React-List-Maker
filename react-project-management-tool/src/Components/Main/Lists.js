import React from 'react';
import { ACTIONS } from '../../ACTIONS.js'

export default function Lists( props ) {

    return (
    <div className='container' id={'list-container-'+props.list.id}>
        <div id={'list-name-'+props.list.id}>{ props.list.listName }</div>
        <button 
          className='btn' id={'delete-list-btn-'+props.list.id} onClick={() => props.dispatch({ type: ACTIONS.DELETE_LIST, payload: { id: props.list.id } }) } 
        >X</button>
    </div>
    );
}