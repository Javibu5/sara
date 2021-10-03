import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type ProjectStatusWasUpdatedProps = {
    isDone: boolean;
};

export class ProjectStatusWasUpdated extends Event<ProjectStatusWasUpdatedProps> {
    constructor(public readonly id: string, public readonly isDone: boolean) {
        super(id, {
            isDone,
        });
    }
}
