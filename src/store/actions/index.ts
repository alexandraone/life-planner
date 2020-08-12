import {
  AddTodoAction,
  AddTodoListAction,
  ADD_LIST,
  ADD_TODO,
  DeleteTodoAction,
  DeleteTodoListAction,
  DELETE_LIST,
  DELETE_TODO,
  EditTodoListAction,
  EDIT_LIST,
  ToggleTodoAction,
  TOGGLE_TODO,
} from './types';

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

export const toggleTodo = (id: number): ToggleTodoAction => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const addTodoList = (title: string): AddTodoListAction => {
  return {
    type: ADD_LIST,
    title,
  };
};

export const deleteTodoList = (id: number): DeleteTodoListAction => {
  return {
    type: DELETE_LIST,
    id,
  };
};

export const editTodoList = (title: string, id: number): EditTodoListAction => {
  return {
    type: EDIT_LIST,
    id,
    title,
  };
};
