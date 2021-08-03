import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@sara/nestjs/common';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID(4)
  _id: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  surname: string;

  @ApiProperty()
  @IsNotEmpty()
  nid: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  lock: boolean;

  @ApiProperty()
  roles: Role[];
}
