export class CreateExpenseDto {
  public readonly _id: string;
  public readonly reason: string;
  public readonly amount: number;
  public readonly creditCardId: string;
}
