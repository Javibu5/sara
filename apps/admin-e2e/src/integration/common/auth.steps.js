import { Given } from 'cypress-cucumber-preprocessor/steps';

import loginPageFactory from '../../support/LoginPage';

const LoginPage = loginPageFactory('/#/login');

Given('que estoy logueado como administrador', () => {
  LoginPage.navigate();
  LoginPage.login('admin', 'password');
});
