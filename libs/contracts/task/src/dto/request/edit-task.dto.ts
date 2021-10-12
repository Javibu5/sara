export class EditTaskDto {
  public readonly name: string;
  public readonly projectId: string;
  public readonly employees: string[];
  public readonly isFinished: boolean;
}
