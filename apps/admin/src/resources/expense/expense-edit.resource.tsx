import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ExpenseEdit = ({ permissions, ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="reason" />
      <TextInput source="amount" />
      <TextInput source="creditCardId" />
    </SimpleForm>
  </Edit>
);
