import { ValueObject } from '@sara/domain';

interface Props {
  value: string;
}

export class Surname extends ValueObject<Props> {
  public static fromString(name: string): Surname {
    if (name.length === 0) {
      throw new Error('Name cannot be empty');
    }

    if (!/^[a-zA-Z0-9ñÑ]+$/.test(name)) {
      throw new Error('Invalid surname characters');
    }

    return new Surname({ value: name });
  }

  get value(): string {
    return this.props.value;
  }
}