export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  dueDate: string;
  todoListId: number;
}

export interface IList {
  id: number;
  title: string;
}

export interface ApplicationState {
  todos: ITodo[];
  lists: IList[];
}

export type PartialState = Partial<ApplicationState>;
