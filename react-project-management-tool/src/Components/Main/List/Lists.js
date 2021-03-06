import React, {useState, useReducer} from 'react';
import CardForm from '../Card/CardForm.js';
import Cards from '../Card/Cards.js';
import { cardReducer } from '../../../CardReducer.js'
import { ACTIONS } from '../../../ACTIONS.js'

export default function Lists( props ) {

  const [cards, dispatchCard] = useReducer(cardReducer, []);
  const [cardSwitchBtn, setCardSwitchBtn] = useState(false);
  const [cardName, setCardName] = useState('') 

  const handleCardOnClose = () => {
      setCardSwitchBtn(!cardSwitchBtn)
  }
  
  const handleCardOnChange = e => {
    setCardName(e.target.value)
  }
  
  function handleCardOnSubmit(e) {
    e.preventDefault()
    dispatchCard({ type: ACTIONS.ADD_CARD, payload: { cardSwitchBtn, setCardSwitchBtn, cardName: cardName, newCard } })
    setCardName('')
  }
  
  function newCard(cardName) {
    return { id: Date.now(), cardName: cardName }
  }

    return (
    <div className='container' id={'list-container-'+props.list.id}>
      <div classname='container' id={'list-name-container-'+props.list.id}>
        <div id={'list-name-'+props.list.id}>{ props.list.listName }</div>
        <button 
          className='btn' 
          id={'delete-list-btn-'+props.list.id} 
          onClick={() => props.dispatchList({ type: ACTIONS.DELETE_LIST, payload: { id: props.list.id } }) } 
        >X</button>
      </div>
      {cards.map(card => (
            <Cards 
              key={card.id} 
              card={card} 
              dispatchCard={dispatchCard} 
            />
      ))}
      {
            cardSwitchBtn === false ?
                <button 
                  className='btn' 
                  id='add-card-btn' 
                  onClick={handleCardOnClose}
                >Add Card</button>
            :
            <CardForm 
              handleCardOnChange={handleCardOnChange} 
              handleCardOnSubmit={handleCardOnSubmit} 
              handleCardOnClose={handleCardOnClose}
            />
        }
    </div>
    );
}