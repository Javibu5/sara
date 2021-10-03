import { GetProjectHandler, GetProjectsHandler } from '..';

export * from './get-project.handler';
export * from './get-project.query';
export * from './get-projects.handler';
export * from './get-projects.query';


export const queryHandlers = [
    GetProjectHandler,
    GetProjectsHandler
]