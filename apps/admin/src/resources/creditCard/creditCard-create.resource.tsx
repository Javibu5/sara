import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
import * as uuid from 'uuid';

const postDefaultValue = () => ({ id: uuid.v4() });

export const CreditCardCreate = (props) => (
  <Create {...props}>
    <SimpleForm initialValues={postDefaultValue}>
      <TextInput source="cardNumber" />
    </SimpleForm>
  </Create>
);
