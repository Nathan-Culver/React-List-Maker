import { ACTIONS } from './ACTIONS.js'

export const cardReducer = (cards, action) => {
    switch (action.type) {
        case ACTIONS.ADD_CARD:
            action.payload.setCardSwitchBtn(!action.payload.cardSwitchBtn)
            return [ ...cards, action.payload.newCard(action.payload.cardName)]
        case ACTIONS.DELETE_CARD:
            return cards.filter( card => card.id !== action.payload.id)
        default:
            throw cards
        }
};