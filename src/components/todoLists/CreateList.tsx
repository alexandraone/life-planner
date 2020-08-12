import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { addTodoList } from '../../store/actions/index';
import ListForm from './ListForm';

const CreateList: FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const onSubmit = useCallback(
    (formValues) => {
      dispatch(addTodoList(formValues.title));
      setOpen(false);
    },
    [dispatch]
  );

  const ListFormProps = {
    onSubmit,
    name: 'title',
    label: 'Add Todo List',
  };

  return (
    <div>
      <Button onClick={() => show()}>
        <Icon name="plus" color="orange" size="large" />
        Add
      </Button>
      <Modal size="small" open={open} onClose={close}>
        <Modal.Header>Add a Todo List</Modal.Header>
        <Modal.Content>
          <ListForm {...ListFormProps} />
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

export default CreateList;
