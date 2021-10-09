import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from './create-task.command';
import { EmployeeId, ProjectId, Task, TaskId, TaskName } from '../../domain';

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
      project: ProjectId.fromString(command.taskDto.projecId),
      employees: command.taskDto.employees.map((employee) =>
        EmployeeId.fromString(employee)
      ),
      deadline: command.taskDto.deadline || null,
    };

    const task = Task.add(criteria);
    await this.tasks.save(task);
  }
}
