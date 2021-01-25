import { ApiProperty } from '@nestjs/swagger';
import { CredentialsInterface } from '@sara/contracts';

export class LoginDTO implements CredentialsInterface {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}