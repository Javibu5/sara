import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CreateProjectDto,
  EditProjectDto,
  ProjectDto,
} from '@sara/contracts/project';

import {
  CreateProjectCommand,
  GetProjectQuery,
  GetProjectsQuery,
  UpdateProjectCommand,
} from '../../application';

@Injectable()
export class ProjectService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async create(projectDto: CreateProjectDto): Promise<ProjectDto> {
    await this.commandBus.execute(new CreateProjectCommand(projectDto));
    return new ProjectDto({ ...projectDto });
  }
  findAll(): Promise<ProjectDto[]> {
    return this.queryBus.execute(new GetProjectsQuery());
  }

  async findOne(id: string): Promise<ProjectDto> {
    return this.queryBus.execute(new GetProjectQuery(id));
  }

  async update(id: string, projectDto: EditProjectDto) {
    await this.commandBus.execute(new UpdateProjectCommand(id, projectDto));

    const project = await this.queryBus.execute(new GetProjectQuery(id));

    return new ProjectDto({ ...project });
  }
}
