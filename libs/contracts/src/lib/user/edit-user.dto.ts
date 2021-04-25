import { Role } from '../auth';

export class EditUserDTO {
  username: string;
  plainPassword: string;
  lock: boolean;
  roles: Role[];
}
