import { ValueObject } from '@sara/domain';

interface Props {
  value: string;
}

export class Nid extends ValueObject<Props> {
  public static fromString(name: string): Nid {
    if (name.length === 0) {
      throw new Error('Nid cannot be empty');
    }

    if (!/^[a-zA-Z0-9ñÑ]+$/.test(name)) {
      throw new Error('Invalid nid characters');
    }

    return new Nid({ value: name });
  }

  get value(): string {
    return this.props.value;
  }
}