import React from 'react';
import { ACTIONS } from '../../../ACTIONS.js'

export default function Cards( props ) {

    return (
    <div className='container' id={'card-container-'+props.card.id}>
      <div classname='container' id={'card-name-container-'+props.card.id}>
        <div id={'card-name-'+props.card.id}>{ props.card.cardName }</div>
        <button 
          className='btn' 
          id={'delete-card-btn-'+props.card.id} 
          onClick={() => props.dispatchCard({ type: ACTIONS.DELETE_CARD, payload: { id: props.card.id } }) } 
        >X</button>
      </div>
    </div>
    );
}