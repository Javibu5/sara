import * as React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

export const ExpenseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="expenseNumber" />
    </Datagrid>
  </List>
);
