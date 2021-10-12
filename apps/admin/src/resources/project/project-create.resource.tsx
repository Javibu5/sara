import { ArrowDropDown } from '@material-ui/icons';
import * as React from 'react';
import {
  BooleanInput,
  Create,
  DateInput,
  ReferenceInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from 'react-admin';
import * as uuid from 'uuid';

const postDefaultValue = () => ({ id: uuid.v4() });

export const ProjectCreate = (props) => (
  <Create {...props}>
    <SimpleForm initialValues={postDefaultValue}>
      <TextInput source="name" />
      <TextInput source="description" />
      <DateInput source="deadline" />
    </SimpleForm>
  </Create>
);
