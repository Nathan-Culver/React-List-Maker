import React from 'react';

export default function ListForm( props ) {

    return (
        <form className='form' onSubmit={props.handleListOnSubmit}>
            <div className='container' id='input-btn-container'>
                <input
                    className='input'
                    id='list-input'
                    type='text'
                    name={props.listName}
                    placeholder='  List name'
                    onChange={ props.handleListOnChange }
                />
                <button className='btn' id='close-list-btn' onClick={ props.handleListOnClose }>X</button>
            </div>
            <button className='btn' id='add-list-btn' type='submit' onClick={ props.handleListOnSubmit }>Add List</button>
        </form>
    );
}