import React from 'react';

export default function Form( props ) {

    return (
        <form className='form' onSubmit={props.handleOnSubmit}>
            <div className='container' id='input-btn-container'>
                <input
                    className='input'
                    id='list-input'
                    type='text'
                    name={props.listName}
                    placeholder='  List name'
                    onChange={ props.handleOnChange }
                />
                <button className='btn' id='close-list-btn' onClick={ props.handleOnClose }>X</button>
            </div>
            <button className='btn' id='add-list-btn' type='submit' onClick={ props.handleOnSubmit }>Add List</button>
        </form>
    );
}