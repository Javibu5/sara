import { ProjectDto } from '@sara/contracts/project';

export const PROJECT_FINDER = 'PROJECT_FINDER';

export interface IProjectFinder {
  findAll(): Promise<ProjectDto[]>;
}
