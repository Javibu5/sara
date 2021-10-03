import { ProjectDeadlineWasUpdatedProjection } from './project-deadline-was-updated.projection';
import { ProjectDescriptionWasUpdatedProjection } from './project-description-was-update.projection';
import { ProjectNameWasUpdatedProjection } from './project-name-was-update.projection';
import { ProjectStatusWasUpdatedProjection } from './project-status-was-updated.projection';
import { ProjectWasCreatedProjection } from './project-was-created.projection';

export * from './project.schema';


export const projectionHandlers = [
    ProjectWasCreatedProjection,
    ProjectNameWasUpdatedProjection,
    ProjectDescriptionWasUpdatedProjection,
    ProjectStatusWasUpdatedProjection,
    ProjectDeadlineWasUpdatedProjection
]