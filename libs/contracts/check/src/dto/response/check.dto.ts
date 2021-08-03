import { ApiProperty } from '@nestjs/swagger';

interface Props {
  readonly id: string;
  readonly employeeId: string;
  readonly inAt?: Date;
  readonly outAt?: Date;
  readonly isAutoClosed: boolean;
  readonly createdAt: Date;
}

export class CheckDto {
  @ApiProperty()
  readonly _id: string;

  @ApiProperty()
  readonly employeeId: string;

  @ApiProperty()
  readonly inAt?: Date;

  @ApiProperty()
  readonly outAt?: Date;

  @ApiProperty()
  readonly isAutoClosed: boolean;

  @ApiProperty()
  readonly createdAt: Date;

  constructor(props: Partial<Props>) {
    Object.assign(this, props);
  }
}
