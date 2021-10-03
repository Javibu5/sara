import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type TaskWasCreatedProps = {
    _id: string,
    name: string,
    projectId: string,
    deadline: Date | null,
    isFinished: boolean,
    employees: string[]
}


export class TaskWasCreated extends Event<TaskWasCreatedProps>{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly projectId: string,
        public readonly deadline: Date | null,
        public readonly isFinished: boolean,
        public readonly employees: string[],
    ) {
        super(id, {
            _id: id,
            name,
            projectId,
            deadline,
            isFinished,
            employees
        })
    }
}