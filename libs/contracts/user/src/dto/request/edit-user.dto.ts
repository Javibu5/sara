import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@sara/nestjs/common';

export class EditUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  lock: boolean;

  @ApiProperty()
  roles: Role[];
}
