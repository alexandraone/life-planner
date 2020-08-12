import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Header, Segment } from 'semantic-ui-react';
import CreateList from './CreateList';
import TodoList from './TodoList';

const TodoLists = ({ history }: RouteComponentProps): JSX.Element => {
  return (
    <Container>
      <Segment clearing>
        <Header as="h2" floated="left">
          Todo Lists
        </Header>
        <Header as="h2" floated="right">
          <CreateList />
        </Header>
      </Segment>
      <TodoList {...history} />
    </Container>
  );
};

export default TodoLists;
