import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDocument, PROJECT_PROJECTION } from './project.schema';
import { ProjectStatusWasUpdated } from '../../../domain/event/project-satus-was-updated.event';



@EventsHandler(ProjectStatusWasUpdated)
export class ProjectStatusWasUpdatedProjection implements IEventHandler<ProjectStatusWasUpdated> {
    constructor(
        @InjectModel(PROJECT_PROJECTION)
        private readonly projects: Model<ProjectDocument>
    ) { }

    async handle(event: ProjectStatusWasUpdated) {
        await this.projects.findByIdAndUpdate(event.aggregateId, {
            isDone: event.isDone,
        }).exec()
    }
}
