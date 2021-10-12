import { ArrowDropDown } from '@material-ui/icons';
import * as React from 'react';
import {
  BooleanInput,
  Create,
  DateInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';
import * as uuid from 'uuid';

const postDefaultValue = () => ({ id: uuid.v4() });

export const TaskCreate = (props) => (
  <Create {...props}>
    <SimpleForm initialValues={postDefaultValue}>
      <TextInput source="name" />
      <ReferenceInput label="Proyecto" source="projectId" reference="projects">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Empleado" source="employees" reference="users">
        <SelectArrayInput optionText="username" />
      </ReferenceInput>
      <DateInput source="deadline" />
    </SimpleForm>
  </Create>
);
