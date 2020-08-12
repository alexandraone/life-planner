import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

interface LocationState {
  todoListId: number;
  title: string;
}

const Todos = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const todoListId = location.state?.todoListId;

  return (
    <Container>
      <Button
        style={{ position: 'absolute', left: '0' }}
        onClick={() => history.push('/')}
      >
        <Icon name="angle left" color="orange" size="large" />
        Home
      </Button>
      <Segment clearing>
        <Header as="h2" floated="left">
          {location.state?.title}
        </Header>
        <Header as="h2" floated="right">
          <CreateTodo todoListId={todoListId} />
        </Header>
      </Segment>
      <Todo todoListId={todoListId} />
    </Container>
  );
};

export default Todos;
