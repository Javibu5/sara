export class CreateProjectDto {
  public readonly _id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly deadline: Date;
  public readonly isDone: boolean;
}
