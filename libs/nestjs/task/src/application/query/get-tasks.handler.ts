import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TaskDto } from '@sara/contracts/task';

import { ITaskFinder, TASK_FINDER } from '../services';
import { GetTasksQuery } from './get-tasks.query';

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements IQueryHandler<GetTasksQuery> {
    constructor(
        @Inject(TASK_FINDER)
        private readonly finder: ITaskFinder
    ) { }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async execute(query: GetTasksQuery): Promise<TaskDto[]> {
        return this.finder.findAll();
    }
}
