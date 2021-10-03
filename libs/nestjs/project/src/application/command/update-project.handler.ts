import {
    AggregateRepository,
    IdNotFoundError,
    InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Project, ProjectDescription, ProjectId, ProjectName } from '../../domain';
import { UpdateProjectCommand } from './update-project.command';


@CommandHandler(UpdateProjectCommand)
export class UpdateProjectHandler
    implements ICommandHandler<UpdateProjectCommand>
{
    constructor(
        @InjectAggregateRepository(Project)
        private readonly projects: AggregateRepository<Project, ProjectId>
    ) { }

    async execute(command: UpdateProjectCommand) {
        const projectId = ProjectId.fromString(command.id);
        const project = await this.projects.find(projectId);

        if (!project) {
            throw IdNotFoundError.withId(projectId);
        }

        if (command.editProjectDto.name) {
            const name = ProjectName.fromString(command.editProjectDto.name);
            this.updateProjectName(project, name);
        }

        if (command.editProjectDto.description) {
            const description = ProjectDescription.fromString(command.editProjectDto.description);
            this.updateProjectDescription(project, description);
        }

        if (command.editProjectDto.deadline) {
            this.updateProjectDeadline(project, command.editProjectDto.deadline);
        }
        if (command.editProjectDto.isDone) {
            this.updateProjectStatus(project, command.editProjectDto.isDone);
        }

        this.projects.save(project);
    }

    private updateProjectName(project: Project, name: ProjectName) {
        project.updateName(name);
    }

    private updateProjectDescription(project: Project, description: ProjectDescription) {
        project.updateDescription(description);
    }

    private updateProjectDeadline(project: Project, deadline: Date) {
        project.updateDeadline(deadline);
    }

    private updateProjectStatus(project: Project, isDone: boolean) {
        project.updateStatus(isDone);
    }
}
