import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class RegisterCheckDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID(4)
  readonly _id: string;
}
