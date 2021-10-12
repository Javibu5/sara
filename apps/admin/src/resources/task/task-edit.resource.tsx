import * as React from 'react';
import {
  BooleanInput,
  DateInput,
  Edit,
  ReferenceInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const TaskEdit = ({ permissions, ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <ReferenceInput label="Proyecto" source="projectId" reference="projects">
        <TextInput source="name" />
      </ReferenceInput>
      <ReferenceInput label="Empleado" source="employees" reference="users">
        <SelectArrayInput optionText="name" />
      </ReferenceInput>
      <DateInput source="deadline" />
    </SimpleForm>
  </Edit>
);
