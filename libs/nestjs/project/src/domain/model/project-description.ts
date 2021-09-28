import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

export class ProjectDescription extends ValueObject<Props> {
  public static fromString(name: string): ProjectDescription {
    if (name.length === 0) {
      throw new Error('Name cannot be empty');
    }
    return new ProjectDescription({ value: name });
  }

  get value(): string {
    return this.props.value;
  }
}
