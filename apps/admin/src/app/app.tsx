import React from 'react';
import { Admin, Resource, ResourceContext } from 'react-admin';

import { Dashboard } from '../components';
import { authProvider, dataProvider } from '../lib';
import {
  CreditCardCreate,
  CreditCardEdit,
  CreditCardList,
  UserCreate,
  UserEdit,
  UserList,
} from '../resources';
import { CheckList } from '../resources/check';
import { ExpenseCreate, ExpenseEdit, ExpenseList } from '../resources/expense';

const App = () => (
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}
  >
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />

    <Resource
      name="creditCards"
      list={CreditCardList}
      edit={CreditCardEdit}
      create={CreditCardCreate}
    />

    <Resource
      name="expenses"
      list={ExpenseList}
      edit={ExpenseEdit}
      create={ExpenseCreate}
    />

    <Resource name="check" list={CheckList} />
  </Admin>
);

export default App;
