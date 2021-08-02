import { ValueObject } from '@sara/domain';

interface Props {
  value: number;
}

export class CreditCardNumber extends ValueObject<Props> {
  public static fromString(number: number): CreditCardNumber {
    if (number < 1000000000000000) {
      throw new Error('Credit card number too short');
    }

    if (number > 9999999999999999) {
      throw new Error('Credit card number too long');
    }

    return new CreditCardNumber({ value: number });
  }

  get value(): number {
    return this.props.value;
  }
}
