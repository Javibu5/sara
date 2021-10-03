import { ProjectDto } from '@sara/contracts/project';
import { ProjectId } from '../../domain';

export const PROJECT_FINDER = 'PROJECT_FINDER';

export interface IProjectFinder {
  findAll(): Promise<ProjectDto[]>;
  find(projectId: ProjectId): Promise<ProjectDto>
}
