import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@sara/nestjs/common';
import { Exclude } from 'class-transformer';

interface Props {
  _id: string;
  username: string;
  roles: Role[];
  password: string;
  name: string;
  surname: string;
  phoneNumber: string;
  nid: string;
  lock: boolean;
}

export class UserDto {
  @ApiProperty()
  public readonly _id: string;

  @ApiProperty()
  public readonly username: string;

  @ApiProperty()
  public readonly roles: Role[];

  @Exclude()
  public readonly password: string;

  @ApiProperty()
  public readonly name: string;

  @ApiProperty()
  public readonly surname: string;

  @ApiProperty()
  public readonly phoneNumber: string;

  @ApiProperty()
  public readonly nid: string;

  @ApiProperty()
  public readonly lock: boolean;

  constructor(props: Partial<Props>) {
    Object.assign(this, props);
  }
}
