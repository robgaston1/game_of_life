import { combineReducers } from 'redux';
import lifeReducer from './lifeReducer';
import genReducer from './genReducer';

const rootReducer = combineReducers({
  life: lifeReducer,
  generation: genReducer
});

export default rootReducer;
