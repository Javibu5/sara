import { ProjectDeadlineWasUpdated, ProjectDeadlineWasUpdatedProps, ProjectDescriptionWasUpdated, ProjectDescriptionWasUpdatedProps, ProjectNameWasUpdated, ProjectNameWasUpdatedProps, ProjectStatusWasUpdated, ProjectStatusWasUpdatedProps, ProjectWasCreated, ProjectWasCreatedProps } from '..';
import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export * from './project-deadline-was-updated.event';
export * from './project-description-was-update.event';
export * from './project-name-was-updated.event';
export * from './project-satus-was-updated.event';
export * from './project-was-created.event';

export const eventTransformers = {
    ProjectWasCreated: (event: Event<ProjectWasCreatedProps>) =>
        new ProjectWasCreated(
            event.aggregateId,
            event.payload.name,
            event.payload.description,
            event.payload.deadline,
            event.payload.isDone,
        ),

    ProjectNameWasUpdated: (event: Event<ProjectNameWasUpdatedProps>) =>
        new ProjectNameWasUpdated(event.aggregateId, event.payload.name),
    ProjectDescriptionWasUpdated: (event: Event<ProjectDescriptionWasUpdatedProps>) =>
        new ProjectDescriptionWasUpdated(event.aggregateId, event.payload.description),
    ProjectDeadlineWasUpdated: (event: Event<ProjectDeadlineWasUpdatedProps>) =>
        new ProjectDeadlineWasUpdated(event.aggregateId, event.payload.deadline),
    ProjectStatusWasUpdated: (event: Event<ProjectStatusWasUpdatedProps>) =>
        new ProjectStatusWasUpdated(event.aggregateId, event.payload.isDone),
};
