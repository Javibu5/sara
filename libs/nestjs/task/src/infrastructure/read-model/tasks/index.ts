import { TaskWasCreatedProjection } from './task-was-created.projection';

export * from './task-was-created.projection';
export * from './task.schema';


export const projectionHandlers = [
    TaskWasCreatedProjection
]