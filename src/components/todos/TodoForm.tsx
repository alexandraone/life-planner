import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'semantic-ui-react';
import { FormValues } from './CreateTodo';

interface TodoFormProps {
  label: string;
  onSubmit: (formValues: FormValues) => void;
}

const TodoForm: FC<TodoFormProps> = ({ label, onSubmit }: TodoFormProps) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>{label}</label>
            <Field name="title" component="input" type="text" />
            <Field name="dueDate" component="input" type="date" />
          </div>
          <Button positive type="submit">
            Save
          </Button>
        </form>
      )}
    />
  );
};

export default TodoForm;
