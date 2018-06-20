import * as actionTypes from '../actions/actionType';

const initialState = {
  cards: [],
  filteredCards: []
}
export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};