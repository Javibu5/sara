import * as React from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

export const TaskList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ReferenceField label="Proyecto" reference="projects" source="projectId">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Empleado" source="employees" reference="users">
        <TextField source="username" />
      </ReferenceField>
      <BooleanField source="isFinished" />
      <DateField source="deadline" />
    </Datagrid>
  </List>
);
