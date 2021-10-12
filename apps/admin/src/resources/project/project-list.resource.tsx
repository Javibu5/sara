import * as React from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

export const ProjectList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="deadline" />
      <BooleanField source="isDone" />
    </Datagrid>
  </List>
);
