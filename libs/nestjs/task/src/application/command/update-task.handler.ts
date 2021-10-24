import {
  AggregateRepository,
  IdNotFoundError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { EmployeeId, ProjectId, Task, TaskId, TaskName } from '../../domain';
import { UpdateTaskCommand } from './update-task.command';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(
    @InjectAggregateRepository(Task)
    private readonly tasks: AggregateRepository<Task, TaskId>
  ) {}

  async execute(command: UpdateTaskCommand) {
    const taskId = TaskId.fromString(command.id);
    const task = await this.tasks.find(taskId);

    if (!task) {
      throw IdNotFoundError.withId(taskId);
    }

    const name = TaskName.fromString(command.editTaskDto.name);
    this.updateTaskName(task, name);

    const projectId = ProjectId.fromString(command.editTaskDto.projectId);
    this.updateProject(task, projectId);

    const employees = command.editTaskDto.employees.map((employee) =>
      EmployeeId.fromString(employee)
    );
    this.updateEmployees(task, employees);

    this.updateTaskStatus(task, command.editTaskDto.isFinished);

    this.tasks.save(task);
  }

  private updateTaskName(task: Task, name: TaskName) {
    task.updateName(name);
  }

  private updateProject(task: Task, project: ProjectId) {
    task.updateProject(project);
  }

  private updateEmployees(task: Task, employees: EmployeeId[]) {
    task.updateEmployees(employees);
  }

  private updateTaskStatus(task: Task, isDone: boolean) {
    task.updateStatus(isDone);
  }
}
