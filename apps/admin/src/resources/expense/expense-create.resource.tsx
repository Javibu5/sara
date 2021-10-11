import * as React from 'react';
import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin';
import * as uuid from 'uuid';

const postDefaultValue = () => ({ id: uuid.v4() });

export const ExpenseCreate = (props) => (
  <Create {...props}>
    <SimpleForm initialValues={postDefaultValue}>
      <TextInput source="reason" />
      <TextInput source="amount" />
      <TextInput source="creditCardId" />
    </SimpleForm>
  </Create>
);
