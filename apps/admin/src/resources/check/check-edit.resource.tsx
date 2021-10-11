import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const CheckEdit = ({ permissions, ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="expenseNumber" />
    </SimpleForm>
  </Edit>
);
