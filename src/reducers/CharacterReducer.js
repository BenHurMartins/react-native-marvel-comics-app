import * as types from './actionsTypes';

const INITIAL_STATE = {
  favoriteChar: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CHAR:
      return {...state, favoriteChar: action.payload};
      break;
    default:
      return state;
      break;
  }
};
