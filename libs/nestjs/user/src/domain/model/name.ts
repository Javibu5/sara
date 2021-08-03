import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

export class Name extends ValueObject<Props> {
  public static fromString(name: string): Name {
    if (name.length === 0) {
      throw new Error('Name cannot be empty');
    }

    if (!/^[a-zA-Z0-9ñÑ]+$/.test(name)) {
      throw new Error('Invalid rname characters');
    }

    return new Name({ value: name });
  }

  get value(): string {
    return this.props.value;
  }
}
