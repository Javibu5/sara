import { ApiProperty } from '@nestjs/swagger';

interface Props {
  readonly _id: string;
  readonly amount: number;
  readonly reason: string;
  readonly employeeId: string;
  readonly creditCardId: string;
  readonly status: string;
  readonly createdAt: Date;
}

export class ExpenseDto {
  @ApiProperty()
  readonly _id: string;

  @ApiProperty()
  readonly amount: number;

  @ApiProperty()
  readonly reason: string;

  @ApiProperty()
  readonly employeeId: string;

  @ApiProperty()
  readonly creditCardId: string;

  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly createdAt: Date;

  constructor(props: Partial<Props>) {
    Object.assign(this, props);
  }
}
