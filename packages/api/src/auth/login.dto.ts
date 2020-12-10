import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  pass: string;
}
