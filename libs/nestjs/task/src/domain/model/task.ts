import { AggregateRoot } from "@aulasoftwarelibre/nestjs-eventstore";
import { EmployeeId } from "./employee-id";
import { ProjectId } from "./project-id";
import { TaskId } from "./task-id";
import { TaskName } from "./task-name";

export class Task extends AggregateRoot {


    private _taskId: TaskId;
    private _name: TaskName;
    private _projectId: ProjectId;
    private _deadline?: Date;
    private isFinished: boolean;
    private employees: EmployeeId[];

    aggregateId(): string {
        return this._taskId.value;
    }

    static add(criteria: {
        id: TaskId,
        name: TaskName,
        project: ProjectId,
        employees: EmployeeId[],
        deadline?: Date
    }) {
        const { id, name, project, employees, deadline } = criteria;
        const task = new Task();

        task.apply(new TaskWasCreated(
            id.value,
            name.value,
            project.value,
            deadline,
            false
            employees.values,
        ))
    }

    private onTaskWasCreated(event: TaskWasCreated) {
        this._taskId = 
    }
}