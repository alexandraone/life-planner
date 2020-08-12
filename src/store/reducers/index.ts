import { combineReducers } from 'redux';
import listReducer from './listReducer';
import todoReducer from './todoReducer';

export default combineReducers({
  todos: todoReducer,
  lists: listReducer,
});
