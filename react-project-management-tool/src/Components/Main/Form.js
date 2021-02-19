import React from 'react';

export default function Form( props ) {

    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <input
                    type='text'
                    name={props.listName}
                    placeholder='List name'
                    onChange={ props.handleOnChange }
                />
                <button onClick={ props.handleClose }>X</button>
            </div>
            <button type='submit' onClick={ props.handleSubmit }>Submit</button>
        </form>
    );
}