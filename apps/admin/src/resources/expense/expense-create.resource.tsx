import { ArrowDropDown } from '@material-ui/icons';
import * as React from 'react';
import {
  BooleanInput,
  Create,
  ReferenceInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from 'react-admin';
import * as uuid from 'uuid';

const postDefaultValue = () => ({ id: uuid.v4() });

export const ExpenseCreate = (props) => (
  <Create {...props}>
    <SimpleForm initialValues={postDefaultValue}>
      <TextInput source="reason" />
      <TextInput source="amount" />
      <ReferenceInput
        label="Credit Card"
        reference="creditCards"
        source="creditCardNumber"
      >
        <SelectArrayInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
