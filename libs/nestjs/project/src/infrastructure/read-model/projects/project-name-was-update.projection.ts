import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDocument, PROJECT_PROJECTION } from './project.schema';

import { ProjectNameWasUpdated } from '../../../domain';

@EventsHandler(ProjectNameWasUpdated)
export class ProjectNameWasUpdatedProjection implements IEventHandler<ProjectNameWasUpdated> {
    constructor(
        @InjectModel(PROJECT_PROJECTION)
        private readonly projects: Model<ProjectDocument>
    ) { }

    async handle(event: ProjectNameWasUpdated) {
        await this.projects.findByIdAndUpdate(event.aggregateId, {
            name: event.name,
        }).exec()
    }
}
