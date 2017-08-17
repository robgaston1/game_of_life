import { ADD_GEN } from '../actions';

export default function (state = 0, action) {
  switch(action.type) {
    case ADD_GEN:
      return state+1;
    default:
      return state;
  }
}
