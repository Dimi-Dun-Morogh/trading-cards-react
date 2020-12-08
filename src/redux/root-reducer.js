import { combineReducers } from 'redux';
import cardReducer from './cards/cards.reducer';

export default combineReducers({
  cardsStore: cardReducer,
});
