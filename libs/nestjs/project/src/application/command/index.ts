import { CreateProjectHandler } from './create-project.handler';
import { UpdateProjectHandler } from './update-project.handler';

export * from './create-project.command';
export * from './update-project.command';

export const commandHandlers = [
    CreateProjectHandler,
    UpdateProjectHandler
]