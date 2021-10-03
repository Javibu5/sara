import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDocument, PROJECT_PROJECTION } from './project.schema';

import { ProjectDeadlineWasUpdated } from '../../../domain';

@EventsHandler(ProjectDeadlineWasUpdated)
export class ProjectDeadlineWasUpdatedProjection implements IEventHandler<ProjectDeadlineWasUpdated> {
    constructor(
        @InjectModel(PROJECT_PROJECTION)
        private readonly projects: Model<ProjectDocument>
    ) { }

    async handle(event: ProjectDeadlineWasUpdated) {
        await this.projects.findByIdAndUpdate(event.aggregateId, {
            deadline: event.deadline,
        }).exec()
    }
}
