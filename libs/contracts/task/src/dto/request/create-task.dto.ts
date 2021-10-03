export class CreateTaskDto {
    public readonly _id: string;
    public readonly name: string;
    public readonly projecId: string;
    public readonly employees: string[];
    public readonly deadline?: Date;
}