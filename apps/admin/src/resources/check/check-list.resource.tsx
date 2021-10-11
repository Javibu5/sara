import * as React from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  TextField,
} from 'react-admin';

export const CheckList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="employeeId" />
      <DateField source="inAt" />
      <DateField source="outAt" />
      <BooleanField source="isAutoClosed" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
