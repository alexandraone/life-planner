import {
  ADD_LIST,
  ADD_TODO,
  DELETE_LIST,
  DELETE_TODO,
  EDIT_LIST,
  TOGGLE_TODO,
} from './types';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  title: string;
  dueDate: string;
  todoListId: number;
  completed: boolean;
}

export const addTodo = (
  title: string,
  dueDate = '',
  todoListId: number
): AddTodoAction => {
  return {
    type: ADD_TODO,
    title,
    completed: false,
    dueDate,
    todoListId,
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const addTodoList = (title: string) => {
  return {
    type: ADD_LIST,
    title,
  };
};

export const deleteTodoList = (id: number) => {
  return {
    type: DELETE_LIST,
    id,
  };
};

export const editTodoList = (title: string, id: number) => {
  return {
    type: EDIT_LIST,
    id,
    title,
  };
};
