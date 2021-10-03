import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type ProjectNameWasUpdatedProps = {
    name: string;
};

export class ProjectNameWasUpdated extends Event<ProjectNameWasUpdatedProps> {
    constructor(public readonly id: string, public readonly name: string) {
        super(id, {
            name,
        });
    }
}
