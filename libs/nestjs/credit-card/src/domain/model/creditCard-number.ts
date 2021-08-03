import { ValueObject, DomainError } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

export class CreditCardNumber extends ValueObject<Props> {
  public static fromString(number: string): CreditCardNumber {
    if (number.length !== 16) {
      throw DomainError.because('Invalid credit card number')
    }

    return new CreditCardNumber({ value: number });
  }

  get value(): string {
    return this.props.value;
  }
}
