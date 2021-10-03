import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ProjectDto } from '@sara/contracts/project';

import { IProjectFinder, PROJECT_FINDER } from '../service';
import { GetProjectsQuery } from './get-projects.query';

@QueryHandler(GetProjectsQuery)
export class GetProjectsHandler implements IQueryHandler<GetProjectsQuery> {
  constructor(
    @Inject(PROJECT_FINDER)
    private readonly finder: IProjectFinder
  ) { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(query: GetProjectsQuery): Promise<ProjectDto[]> {
    return this.finder.findAll();
  }
}
