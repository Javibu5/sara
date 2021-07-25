import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const CreditCardEdit = ({ permissions, ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="cardNumber" />
    </SimpleForm>
  </Edit>
);
