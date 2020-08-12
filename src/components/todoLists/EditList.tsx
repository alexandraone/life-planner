import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { editTodoList } from '../../store/actions/index';
import ListForm from './ListForm';

interface EditListProps {
  listId: number;
}

const EditList: FC<EditListProps> = ({ listId }: EditListProps) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const onSubmit = useCallback(
    (formValues) => {
      dispatch(editTodoList(formValues.title, listId));
      setOpen(false);
    },
    [dispatch, listId]
  );

  return (
    <div>
      <Icon name="edit" size="large" link onClick={show} />
      <Modal size={'mini'} open={open} onClose={close}>
        <Modal.Header>Edit title</Modal.Header>
        <Modal.Content>
          <ListForm onSubmit={onSubmit} name="title" label="Edit List" />
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

export default EditList;
