import { CreateProjectHandler, UpdateProjectHandler } from '..';

export * from './create-project.command';
export * from './create-project.handler';
export * from './update-project.command';
export * from './update-project.handler';

export const commandHandlers = [
    CreateProjectHandler,
    UpdateProjectHandler

]