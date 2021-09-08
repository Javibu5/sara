import { Inject } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

import { ProjectId } from '../../../project/domain/model/project-id';
import { UserId } from '../../../user/domain';
import { Task } from '../../domain/model/task';
import { TaskId } from '../../domain/model/task-id';
import { TASKS,Tasks } from '../../domain/repository/task.repository';
import { RegisterTaskCommand } from './register-task.command';

export class RegisterTaskHandler
  implements ICommandHandler<RegisterTaskCommand> {
  constructor(@Inject(TASKS) private tasks: Tasks) {}

  async execute(command: RegisterTaskCommand) {
    const taskId = TaskId.fromString(command.id);
    const projectId = ProjectId.fromString(command.projectId);
    const userId = UserId.fromString(command.createdBy);

    if (await this.tasks.find(taskId)) {
      throw new Error();
    }

    const tasks = Task.registerTask(taskId, command.name, projectId, userId);

    this.tasks.save(tasks);
  }
}
