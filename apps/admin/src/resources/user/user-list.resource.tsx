import * as React from 'react';
import {
  ArrayField,
  Datagrid,
  List,
  SingleFieldList,
  TextField,
} from 'react-admin';

import SimpleChipField from '../../components/simple-chip-field';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="name" />
      <TextField source="surname" />
      <TextField source="nid" />
      <TextField source="phonenumber" />
      <ArrayField source="roles">
        <SingleFieldList>
          <SimpleChipField />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);
