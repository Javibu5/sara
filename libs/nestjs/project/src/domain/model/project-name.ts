import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

export class ProjectName extends ValueObject<Props> {
  public static fromString(name: string): ProjectName {
    if (name.length === 0) {
      throw new Error('Name cannot be empty');
    }
    return new ProjectName({ value: name });
  }

  get value(): string {
    return this.props.value;
  }
}
