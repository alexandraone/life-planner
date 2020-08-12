import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'semantic-ui-react';
import { FormValues } from '../todos/CreateTodo';

interface ListFormProps {
  onSubmit: (formValues: FormValues) => void;
  label: string;
  name: string;
}

const ListForm: FC<ListFormProps> = ({
  onSubmit,
  name,
  label,
}: ListFormProps) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>{label}</label>
              <Field name={name} component="input" type="text" />
            </div>
            <Button positive type="submit">
              Save
            </Button>
          </form>
        );
      }}
    />
  );
};

export default ListForm;
