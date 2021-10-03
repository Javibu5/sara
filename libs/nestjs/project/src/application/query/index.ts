import { GetProjectHandler } from './get-project.handler';
import { GetProjectsHandler } from './get-projects.handler';

export * from './get-project.query';
export * from './get-projects.query';


export const queryHandlers = [
    GetProjectHandler,
    GetProjectsHandler
]