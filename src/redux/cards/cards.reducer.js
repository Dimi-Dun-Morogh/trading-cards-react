import { cardsActionTypes } from './cards.action-types';

const INITIAL_STATE = {
  cards: [],
  showModal: false,
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cardsActionTypes.SET_CARD_DATA:
      return {
        ...state,
        cards: action.payload,
      };
    case cardsActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer;
