import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import {
  Project,
  ProjectDescription,
  ProjectId,
  ProjectName,
} from '../../domain';
import { CreateProjectCommand } from './create-project.command';

@CommandHandler(CreateProjectCommand)
export class CreateProjectHandler
  implements ICommandHandler<CreateProjectCommand>
{
  constructor(
    @InjectAggregateRepository(Project)
    private readonly projects: AggregateRepository<Project, ProjectId>
  ) {}

  async execute(command: CreateProjectCommand) {
    const projectId = ProjectId.fromString(command.project._id);
    if (await this.projects.find(projectId)) {
      throw IdAlreadyRegisteredError.withId(projectId);
    }

    const criteria = {
      id: projectId,
      name: ProjectName.fromString(command.project.name),
      description: ProjectDescription.fromString(command.project.description),
      deadline: command.project.deadline,
      isDone: command.project.isDone,
    };
    const project = Project.add(criteria);

    await this.projects.save(project);
  }
}
