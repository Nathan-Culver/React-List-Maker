import React, {useState} from 'react';

import './Main.css';

import Addlist from './AddList.js';
import Lists from './Lists.js';

export default function Main(props) {

    const [switchBtn, setSwitchBtn] = useState(false)

    const handleBtn = () => {
        setSwitchBtn(!switchBtn)
    }

    return (
        <main className='Main'>
            <div className='container' id='lists-container'>
                {
                    props.lists.length != 0 ? 
                    props.lists.map((current, index, arr) => (
                        <Lists
                            lists={props.lists}
                            setLists={props.setLists}    
                            current={current}       
                            index={index}  
                            arr={arr}                 
                        />
                    ))
                    :
                        null
                }
            </div>
            {
            switchBtn === false ?
                <button onClick={handleBtn}>Add list</button>
            :
                <Addlist 
                    lists={props.lists}
                    setLists={props.setLists} 
                    switchBtn={switchBtn}
                    setSwitchBtn={setSwitchBtn} 
                />
            }
        </main>
    );
}