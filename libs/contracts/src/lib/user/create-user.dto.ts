import { Role } from '../auth';

export class CreateUserDTO {
  id: string;
  username: string;
  name: string;
  surname: string;
  nid: string;
  phoneNumber: string;
  plainPassword: string;
  lock: boolean;
  roles: Role[];
}
