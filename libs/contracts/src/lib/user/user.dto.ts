import { Role } from '../auth';

export class UserDto {
  id: string;
  username: string;
  roles: Role[];
}
