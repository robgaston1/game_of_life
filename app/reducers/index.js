import { combineReducers } from 'redux';
import lifeReducer from './lifeReducer';

const rootReducer = combineReducers({
  life: lifeReducer
});

export default lifeReducer;
