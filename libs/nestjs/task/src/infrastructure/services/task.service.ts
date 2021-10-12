import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto, EditTaskDto, TaskDto } from '@sara/contracts/task';

import { CreateTaskCommand, UpdateTaskCommand } from '../../application';
import { GetTaskQuery } from '../../application/query/get-task.query';
import { GetTasksQuery } from '../../application/query/get-tasks.query';

@Injectable()
export class TaskService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async create(taskDto: CreateTaskDto): Promise<TaskDto> {
    await this.commandBus.execute(new CreateTaskCommand(taskDto));
    return new TaskDto({ ...taskDto });
  }
  findAll(): Promise<TaskDto[]> {
    return this.queryBus.execute(new GetTasksQuery());
  }
  async findOne(id: string): Promise<TaskDto> {
    return this.queryBus.execute(new GetTaskQuery(id));
  }

  async update(id: string, editTaskDto: EditTaskDto): Promise<TaskDto> {
    await this.commandBus.execute(new UpdateTaskCommand(id, editTaskDto));
    const task = await this.queryBus.execute(new GetTaskQuery(id));

    return new TaskDto({ ...task });
  }
}
