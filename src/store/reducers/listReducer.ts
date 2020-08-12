import { ADD_LIST, DELETE_LIST, EDIT_LIST } from '../actions/types';

function getId(state) {
  if (state.length > 0) {
    return state[state.length - 1]['id'] + 1;
  } else return 1;
}

export default (state = [], action) => {
  console.log('state: ', state);
  switch (action.type) {
    case ADD_LIST:
      return [...state, { title: action.title, id: getId(state) }];
    case DELETE_LIST:
      return state.filter((list) => list.id !== action.id);
    case EDIT_LIST:
      return state.map((list) =>
        list.id === action.id
          ? { ...list, title: action.title, id: action.id }
          : list
      );
    default:
      return state;
  }
};
