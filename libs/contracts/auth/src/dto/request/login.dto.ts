import { CredentialsInterface } from '../../interfaces';

export class LoginDTO implements CredentialsInterface {
  username: string;

  password: string;
}
