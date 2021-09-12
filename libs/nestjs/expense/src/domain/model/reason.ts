import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

export class Reason extends ValueObject<Props> {
  public static fromString(value: string) {
    return new Reason({ value });
  }

  get value(): string {
    return this.props.value;
  }
}
