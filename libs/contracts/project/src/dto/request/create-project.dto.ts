import { IsUUID } from 'class-validator';

export class CreateProjectDto {
  @IsUUID(4)
  public readonly _id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly deadline: Date;
}
