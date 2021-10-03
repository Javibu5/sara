import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type ProjectDescriptionWasUpdatedProps = {
    description: string;
};

export class ProjectDescriptionWasUpdated extends Event<ProjectDescriptionWasUpdatedProps> {
    constructor(public readonly id: string, public readonly description: string) {
        super(id, {
            description,
        });
    }
}
