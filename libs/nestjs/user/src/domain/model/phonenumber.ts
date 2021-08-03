import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

export class PhoneNumber extends ValueObject<Props> {
  public static fromString(name: string): PhoneNumber {
    if (name.length < 9) {
      throw new Error('Phone number too short');
    }

    if (name.length > 9) {
      throw new Error('Phone number too long');
    }

    return new PhoneNumber({ value: name });
  }

  get value(): string {
    return this.props.value;
  }
}
