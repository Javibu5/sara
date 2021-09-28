import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProjectDto, ProjectDto } from '@sara/contracts/project';

import { CreateProjectCommand, GetProjectsQuery } from '../../application';

export class ProjectService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async create(projectDto: CreateProjectDto): Promise<void> {
    await this.commandBus.execute(new CreateProjectCommand(projectDto));
  }
  findAll(): Promise<ProjectDto[]> {
    return this.queryBus.execute(new GetProjectsQuery());
  }
}
