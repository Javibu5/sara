import { IdNotFoundError } from '@aulasoftwarelibre/nestjs-eventstore';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ProjectDto } from '@sara/contracts/project';


import { ProjectId } from '../../domain';
import { IProjectFinder, PROJECT_FINDER } from '../service';
import { GetProjectQuery } from './get-project.query';


@QueryHandler(GetProjectQuery)
export class GetProjectHandler implements IQueryHandler<GetProjectQuery> {
    constructor(
        @Inject(PROJECT_FINDER)
        private readonly finder: IProjectFinder
    ) { }

    async execute(query: GetProjectQuery): Promise<ProjectDto> {
        const projectId = ProjectId.fromString(query.id);

        const project = await this.finder.find(projectId);

        if (!project) {
            throw IdNotFoundError.withId(projectId);
        }

        return project;
    }
}