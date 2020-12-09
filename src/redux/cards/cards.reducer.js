import { cardsActionTypes } from './cards.action-types';
import { getCheapest } from './cards.utils';

const INITIAL_STATE = {
  cards: [],
  showModal: false,
  currentItem: {},
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
    case cardsActionTypes.SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case cardsActionTypes.GET_CHEAPEST:
      return {
        ...state,
        currentItem: getCheapest(state.cards),
      };
    default:
      return state;
  }
};

export default cardReducer;
