export class TaskDto {
  readonly id: string;
  readonly name: string;
  readonly project: string;
  readonly deadline?: Date;
  readonly isFinised?: boolean;
  readonly employeeId?: string;
  readonly createdAt: Date;
  readonly createdBy: string;
}
