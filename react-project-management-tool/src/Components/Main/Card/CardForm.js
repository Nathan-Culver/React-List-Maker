import React from 'react';

export default function CardForm( props ) {

    return (
        <form className='form' onSubmit={props.handleCardOnSubmit}>
            <div className='container' id='input-btn-container'>
                <input
                    className='input'
                    id='card-input'
                    type='text'
                    name={props.cardName}
                    placeholder='  Card name'
                    onChange={ props.handleCardOnChange }
                />
                <button className='btn' id='close-card-btn' onClick={ props.handleCardOnClose }>X</button>
            </div>
            <button className='btn' id='add-card-btn' type='submit' onClick={ props.handleCardOnSubmit }>Add Card</button>
        </form>
    );
}