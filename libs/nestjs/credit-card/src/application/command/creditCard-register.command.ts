import { ICommand } from '@nestjs/cqrs';

export class CreditCardRegisterCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly creditCardNumber: string
  ) {}
}
