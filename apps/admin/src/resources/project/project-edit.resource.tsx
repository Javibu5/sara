import * as React from 'react';
import {
  BooleanInput,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const ProjectEdit = ({ permissions, ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <DateInput source="deadline" />
      <BooleanInput source="isDone" />
    </SimpleForm>
  </Edit>
);
