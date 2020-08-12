import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { addTodo } from '../../store/actions/index';
import TodoForm from './TodoForm';

interface CreateTodoProps {
  todoListId: number;
}

export interface FormValues {
  title: string;
  dueDate: string;
}

const CreateTodo: FC<CreateTodoProps> = ({ todoListId }: CreateTodoProps) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const onSubmit = (formValues: FormValues) => {
    dispatch(addTodo(formValues.title, formValues.dueDate, todoListId));
    setOpen(false);
  };

  const TodoFormProps = {
    onSubmit,
    label: 'Add Todo',
  };

  return (
    <div>
      <Button onClick={show}>
        <Icon name="plus" color="orange" size="large" />
        Add
      </Button>
      <Modal size={'mini'} open={open} onClose={close}>
        <Modal.Header>Add a Todo</Modal.Header>
        <Modal.Content>
          <TodoForm {...TodoFormProps} />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CreateTodo;
