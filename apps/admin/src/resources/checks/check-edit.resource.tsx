import * as React from 'react';
import {
  DateField,
  DateTimeInput,
  Edit,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const CheckEdit = ({ permissions, ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateTimeInput source="inAt" />
      <DateTimeInput source="outAt" />
    </SimpleForm>
  </Edit>
);
