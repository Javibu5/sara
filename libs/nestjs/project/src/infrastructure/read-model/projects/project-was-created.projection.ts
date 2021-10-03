import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDocument, PROJECT_PROJECTION } from '.';

import { ProjectWasCreated } from '../../../domain';

@EventsHandler(ProjectWasCreated)
export class ProjectWasCreatedProjection implements IEventHandler<ProjectWasCreated> {
    constructor(
        @InjectModel(PROJECT_PROJECTION)
        private readonly projects: Model<ProjectDocument>
    ) { }

    async handle(event: ProjectWasCreated) {
        const project = new this.projects({ ...event.payload });

        await project.save();
    }
}
