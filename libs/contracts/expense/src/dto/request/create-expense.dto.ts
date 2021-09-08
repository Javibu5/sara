export class CreateExpenseDto {
  public readonly _id: string;
  public readonly reason: string;
  public readonly amount: number;
  public readonly employeeId: string;
  public readonly creditCardId: string;
  public readonly status: string;
  public readonly createdAt: Date;
}
