import { History } from 'history';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from 'semantic-ui-react';
import { deleteTodo, deleteTodoList } from '../../store/actions/index';
import { ApplicationState, IList, ITodo } from '../../store/types';
import EditList from './EditList';

const TodoList = (history: History): JSX.Element => {
  const lists = useSelector((state: ApplicationState) => state.lists);
  const todos = useSelector((state: ApplicationState) => state.todos);
  const dispatch = useDispatch();

  const removeTodoList = (id: number) => {
    dispatch(deleteTodoList(id));
    todos
      .filter((todo: ITodo) => todo.todoListId === id)
      .map((todo: ITodo) => dispatch(deleteTodo(todo.id)));
  };

  return (
    <div>
      {lists.length ? (
        <List>
          {lists.map((list: IList, index: number) => {
            return (
              <List.Item
                key={list.id}
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
                    onClick={() => removeTodoList(list.id)}
                  />
                </List.Content>
                <List.Content floated="right">
                  <EditList listId={list.id} />
                </List.Content>
                <List.Icon name="list" size="large" />
                <List.Content>
                  <List.Header
                    as="a"
                    onClick={() =>
                      history.push({
                        pathname: '/todo',
                        state: { todoListId: list.id, title: list.title },
                      })
                    }
                  >
                    {list.title}
                  </List.Header>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      ) : (
        <div
          style={{ marginTop: '50px' }}
          className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
        >
          <div className="alert alert-danger" role="alert">
            No Todo List exists
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
