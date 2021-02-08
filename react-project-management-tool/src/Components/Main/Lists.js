import React, {useState} from 'react';

import './Main.css';

export default function Lists(props) {

    const handleDeleteList = e => {
        let rest;
        [ props.lists[props.index], ...rest ] = props.lists
        return props.setLists(rest)
    }

    return (
        <section>
            <div className='container'>
                <div id={'List'+props.index}>{props.lists[props.index].lName}</div>
                <button onClick={handleDeleteList} value={props.index}>X</button>
            </div>
        </section>
    );
}