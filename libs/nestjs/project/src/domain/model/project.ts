import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';

import { ProjectDeadlineWasUpdated } from '../event/project-deadline-was-updated.event';
import { ProjectDescriptionWasUpdated } from '../event/project-description-was-update.event';
import { ProjectNameWasUpdated } from '../event/project-name-was-updated.event';
import { ProjectStatusWasUpdated } from '../event/project-satus-was-updated.event';
import { ProjectWasCreated } from '../event/project-was-created.event';
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

  updateName(projectName: ProjectName) {
    if (this._name.equals(projectName)) {
      return;
    }

    this.apply(
      new ProjectNameWasUpdated(this._projectId.value, projectName.value)
    );
  }

  updateDescription(projectDescription: ProjectDescription) {
    if (this._description.equals(projectDescription)) {
      return;
    }

    this.apply(
      new ProjectDescriptionWasUpdated(
        this._projectId.value,
        projectDescription.value
      )
    );
  }

  updateDeadline(projectDeadline: Date) {
    if (this._deadline === projectDeadline)
      this.apply(
        new ProjectDeadlineWasUpdated(this._projectId.value, projectDeadline)
      );
  }

  updateStatus(isDone: boolean) {
    this.apply(new ProjectStatusWasUpdated(this._projectId.value, isDone));
  }

  private onProjectWasCreated(event: ProjectWasCreated) {
    this._projectId = ProjectId.fromString(event.id);
    this._name = ProjectName.fromString(event.name);
    this._description = ProjectDescription.fromString(event.description);
    this._deadline = event.deadline;
    this._isDone = event.isDone;
  }

  private onProjectNameWasUpdated(event: ProjectNameWasUpdated) {
    this._name = ProjectName.fromString(event.name);
  }
  private onProjectDescriptionWasUpdated(event: ProjectDescriptionWasUpdated) {
    this._description = ProjectDescription.fromString(event.description);
  }
  private onProjectDeadlineWasUpdated(event: ProjectDeadlineWasUpdated) {
    this._deadline = event.deadline;
  }
  private onProjectStatusWasUpdated(event: ProjectStatusWasUpdated) {
    this._isDone = event.isDone;
  }
}
