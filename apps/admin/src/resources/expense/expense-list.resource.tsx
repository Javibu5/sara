import * as React from 'react';
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

export const ExpenseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="reason" />
      <TextField source="amount" />
      <ReferenceField label="Empleado" source="employeeId" reference="users">
        <TextField source="username" />
      </ReferenceField>
      <ReferenceField
        label="Tarjeta"
        source="creditCardId"
        reference="creditCards"
      >
        <TextField source="creditCardNumber" />
      </ReferenceField>
      <TextField source="status" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
