import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { EmployeeId, ProjectId, Task, TaskId, TaskName } from '../../domain';
import { CreateTaskCommand } from './create-task.command';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(
    @InjectAggregateRepository(Task)
    private readonly tasks: AggregateRepository<Task, TaskId>
  ) {}

  async execute(command: CreateTaskCommand) {
    const taskId = TaskId.fromString(command.taskDto._id);
    if (await this.tasks.find(taskId)) {
      throw IdAlreadyRegisteredError.withId(taskId);
    }

    const criteria = {
      id: taskId,
      name: TaskName.fromString(command.taskDto.name),
      project: ProjectId.fromString(command.taskDto.projectId),
      employees: command.taskDto.employees.map((employee) =>
        EmployeeId.fromString(employee)
      ),
      deadline: command.taskDto.deadline || null,
    };

    const task = Task.add(criteria);
    await this.tasks.save(task);
  }
}
