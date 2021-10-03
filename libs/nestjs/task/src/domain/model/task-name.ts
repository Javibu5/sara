import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
    value: string;
}

export class TaskName extends ValueObject<Props> {
    public static fromString(name: string): TaskName {
        if (name.length === 0) {
            throw new Error('Name cannot be empty');
        }
        return new TaskName({ value: name });
    }

    get value(): string {
        return this.props.value;
    }
}
