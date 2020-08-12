import {
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  ListActionTypes,
} from '../actions/types';
import { IList, TodosOrListsState } from '../types';

function getId(state: TodosOrListsState) {
  if (state.length > 0) {
    return state[state.length - 1]['id'] + 1;
  } else return 1;
}

export default (state = [], action: ListActionTypes): TodosOrListsState => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, { title: action.title, id: getId(state) }];
    case DELETE_LIST:
      return state.filter((list: IList) => list.id !== action.id);
    case EDIT_LIST:
      return state.map((list: IList) =>
        list.id === action.id
          ? { ...list, title: action.title, id: action.id }
          : list
      );
    default:
      return state;
  }
};
