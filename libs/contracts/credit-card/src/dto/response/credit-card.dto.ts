import { ApiProperty } from '@nestjs/swagger';

interface Props {
  readonly _id: string;
  readonly creditCardNumber: string;
}

export class CreditCardDto {
  @ApiProperty()
  readonly _id: string;
  @ApiProperty()
  readonly creditCardNumber: string;

  constructor(props: Partial<Props>) {
    Object.assign(this, props);
  }
}
