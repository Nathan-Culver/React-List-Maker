import React, {useState, useContext} from 'react';

export default function Form(props) {

    return (
        <form>
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