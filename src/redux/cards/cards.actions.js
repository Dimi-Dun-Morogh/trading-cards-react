import { cardsActionTypes } from './cards.action-types';

const url = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';

export const fetchCards = async (dispatch) => {
  const cardsFetched = await fetch(url).then((response) => response.json());
  dispatch({
    type: cardsActionTypes.SET_CARD_DATA,
    payload: cardsFetched,
  });
};
