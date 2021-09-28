import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';

import { ProjectWasCreated } from '../event';
import { ProjectDescription } from './project-description';
import { ProjectId } from './project-id';
import { ProjectName } from './project-name';

export class Project extends AggregateRoot {
  private _projectId: ProjectId;
  private _name: ProjectName;
  private _description: ProjectDescription;
  private _deadline: Date;
  private _isDone: boolean;

  static add(criteria: {
    id: ProjectId;
    name: ProjectName;
    description: ProjectDescription;
    deadline: Date;
    isDone: boolean;
  }): Project {
    const { id, name, description, deadline, isDone } = criteria;
    const project = new Project();

    project.apply(
      new ProjectWasCreated(
        id.value,
        name.value,
        description.value,
        deadline,
        isDone
      )
    );

    return project;
  }
  aggregateId(): string {
    return this.id.value;
  }

  get id(): ProjectId {
    return this._projectId;
  }

  private onProjectWasCreated(event: ProjectWasCreated) {
    this._projectId = ProjectId.fromString(event.id);
    this._name = ProjectName.fromString(event.name);
    this._description = ProjectDescription.fromString(event.description);
    this._deadline = event.deadline;
    this._isDone = event.isDone;
  }
}
