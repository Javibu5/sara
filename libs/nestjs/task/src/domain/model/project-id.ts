import { Id } from '@aulasoftwarelibre/nestjs-eventstore';

export class ProjectId extends Id {
    public static fromString(id: string): ProjectId {
        return new ProjectId(id);
    }
}
