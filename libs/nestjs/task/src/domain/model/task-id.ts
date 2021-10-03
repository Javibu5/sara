import { Id } from '@aulasoftwarelibre/nestjs-eventstore';
import * as uuid from 'uuid';

export class TaskId extends Id {
    static generate(): TaskId {
        return new TaskId(uuid.v4());
    }

    public static fromString(id: string): TaskId {
        return new TaskId(id);
    }
}
