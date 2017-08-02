import { SET_BOARD } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case SET_BOARD:
      return action.payload;
    default:
      return state;
  }
}
