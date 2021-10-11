import { DateRangeRounded } from '@material-ui/icons';
import * as React from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

export const ChecksList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <DateField source="createdAt" />
      <TextField source="id" />
      <ReferenceField label="Empleado" source="employeeId" reference="users">
        <TextField source="username" />
      </ReferenceField>
      <DateField showTime={true} source="inAt" />
      <DateField showTime={true} source="outAt" />
      <BooleanField source="isAutoClosed" />
    </Datagrid>
  </List>
);
