import * as React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

export const CreditCardList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="creditCardNumber" />
    </Datagrid>
  </List>
);
