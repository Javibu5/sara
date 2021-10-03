import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDocument, PROJECT_PROJECTION } from './project.schema';

import { ProjectDescriptionWasUpdated } from '../../../domain';

@EventsHandler(ProjectDescriptionWasUpdated)
export class ProjectDescriptionWasUpdatedProjection implements IEventHandler<ProjectDescriptionWasUpdated> {
    constructor(
        @InjectModel(PROJECT_PROJECTION)
        private readonly projects: Model<ProjectDocument>
    ) { }

    async handle(event: ProjectDescriptionWasUpdated) {
        await this.projects.findByIdAndUpdate(event.aggregateId, {
            description: event.description,
        }).exec()
    }
}
