import { ICommand } from '@nestjs/cqrs';

export class CreditCardUpdateCommand implements ICommand {
  constructor(public readonly id: string, public readonly cardNumber: string) {}
}
