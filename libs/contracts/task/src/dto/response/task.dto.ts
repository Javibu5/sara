export class TaskDto {
    public readonly _id: string;
    public readonly name: string;
    public readonly projecId: string;
    public readonly isFinished: boolean;
    public readonly employeeId: string[];
}