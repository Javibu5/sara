export class CheckDto {
  readonly id: string;
  readonly employeeId: string;
  readonly inAt?: Date;
  readonly outAt?: Date;
  readonly isAutoClosed: boolean;
  readonly createdAt: Date;
}
