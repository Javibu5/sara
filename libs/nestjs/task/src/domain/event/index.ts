import { TaskWasCreated, TaskWasCreatedProps } from "./task-was-created.event";
import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export const eventTransformers = {
    TaskWasCreated: (event: Event<TaskWasCreatedProps>) =>
        new TaskWasCreated(event.aggregateId, event.payload.name, event.payload.projectId, event.payload.deadline, event.payload.isFinished, event.payload.employees)
}