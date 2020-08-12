import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from 'semantic-ui-react';
import { deleteTodo, toggleTodo } from '../../store/actions/index';
import { ApplicationState, ITodo } from '../../store/types';

interface TodoProps {
  todoListId: number;
}

const Todo: FC<TodoProps> = ({ todoListId }: TodoProps) => {
  const todos = useSelector((state: ApplicationState) => state.todos);
  const dispatch = useDispatch();

  const removeTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const toggleTodos = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const result = 'Due:';
  const dueDate = (todo: ITodo) => {
    const today = new Date().toLocaleDateString();
    if (today === todo.dueDate) {
      return `${result} Today`;
    } else if (today < todo.dueDate) {
      return `${result} ${todo.dueDate}`;
    } else {
      return `${result} Date has passed`;
    }
  };

  const todosInList = todos.filter(
    (todo: ITodo) => todo.todoListId === todoListId
  );
  return (
    <div>
      {todos.length ? (
        <List>
          {todosInList.map((todo: ITodo, index: number) => (
            <List.Item
              key={todo.id}
              style={
                index % 2 === 0
                  ? {
                      backgroundColor: '#EFEFEF',
                      padding: '10px',
                    }
                  : { backgroundColor: 'white', padding: '10px' }
              }
            >
              <List.Content floated="right">
                <List.Icon
                  name="minus circle"
                  size="large"
                  link
                  onClick={() => removeTodo(todo.id)}
                />
                <List.Icon
                  name="check circle"
                  size="large"
                  link
                  onClick={() => toggleTodos(todo.id)}
                />
              </List.Content>
              <List.Content
                key={todo.id}
                floated="left"
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                <p>
                  <span>
                    {todo.title} {todo.completed === true ? '(completed)' : ''}
                  </span>
                  <span>{dueDate(todo)}</span>
                </p>
              </List.Content>
            </List.Item>
          ))}
        </List>
      ) : (
        <div
          style={{ marginTop: '50px' }}
          className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
        >
          <div className="alert alert-danger" role="alert">
            Todo List is empty
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
