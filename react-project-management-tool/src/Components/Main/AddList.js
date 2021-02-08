import React, {useState} from 'react';

import './Main.css';

export default function Addlist(props) {

    const [listName, setListName] = useState('')

    const handleClose = e => {
        props.setSwitchBtn(!props.switchBtn)
    }

    const handleAddTOList = () => {
        props.setLists( () => {
            props.setSwitchBtn(!props.switchBtn)
            return Object.keys(props.lists).length == 0 ? [{'lName': listName}] : [...props.lists, {'lName': listName}]
        })
    }

    const handleOnChange = e => {
        setListName(e.target.value)
    }

    return (
        <div>
            <div>
                <input
                    type='text'
                    name='value'
                    placeholder='List name'
                    onChange={handleOnChange}
                />
                <button onClick={handleClose}>X</button>
            </div>
            <button onClick={handleAddTOList}>Add list</button>
        </div>
    );
}