import { IsUUID } from 'class-validator';

export class CreateTaskDto {
  @IsUUID(4)
  public readonly _id: string;
  public readonly name: string;
  public readonly projectId: string;
  public readonly employees: string[];
  public readonly deadline?: Date;
}
