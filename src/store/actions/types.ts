export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const EDIT_LIST = 'EDIT_LIST';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  title: string;
  dueDate: string;
  todoListId: number;
  completed: boolean;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

export interface AddTodoListAction {
  type: typeof ADD_LIST;
  title: string;
}
export interface DeleteTodoListAction {
  type: typeof DELETE_LIST;
  id: number;
}

export interface EditTodoListAction {
  type: typeof EDIT_LIST;
  title: string;
  id: number;
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction;
export type ListActionTypes =
  | AddTodoListAction
  | DeleteTodoListAction
  | EditTodoListAction;
