import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type ProjectDeadlineWasUpdatedProps = {
    deadline: Date;
};

export class ProjectDeadlineWasUpdated extends Event<ProjectDeadlineWasUpdatedProps> {
    constructor(public readonly id: string, public readonly deadline: Date) {
        super(id, {
            deadline,
        });
    }
}
