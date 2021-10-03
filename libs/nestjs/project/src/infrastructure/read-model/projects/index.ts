import { ProjectDescriptionWasUpdatedProjection, ProjectWasCreatedProjection, ProjectNameWasUpdatedProjection, ProjectStatusWasUpdatedProjection, ProjectDeadlineWasUpdatedProjection } from '..';

export * from './project-deadline-was-updated.projection';
export * from './project-description-was-update.projection';
export * from './project-name-was-update.projection';
export * from './project-status-was-updated.projection';
export * from './project-was-created.projection';
export * from './project.schema';


export const projectionHandlers = [
    ProjectWasCreatedProjection,
    ProjectNameWasUpdatedProjection,
    ProjectDescriptionWasUpdatedProjection,
    ProjectStatusWasUpdatedProjection,
    ProjectDeadlineWasUpdatedProjection
]