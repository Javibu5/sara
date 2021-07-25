import { ValueObject } from '@sara/domain';

interface Props {
  value: string;
}

export class CreditCardNumber extends ValueObject<Props> {
  public static fromString(name: string): CreditCardNumber {
    if (name.length < 9) {
      throw new Error('Credit card number too short');
    }

    if (name.length > 9) {
      throw new Error('Credit card number too long');
    }

    return new CreditCardNumber({ value: name });
  }

  get value(): string {
    return this.props.value;
  }
}
