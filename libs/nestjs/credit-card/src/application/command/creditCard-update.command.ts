import { ICommand } from '@nestjs/cqrs';

export class CreditCardWasUpdateCommand implements ICommand {
  constructor(public readonly id: string, public readonly cardNumber: string) {}
}
