import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';

export class EditCheckDto {
  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  readonly inAt: Date;
  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  readonly outAt: Date;
}
