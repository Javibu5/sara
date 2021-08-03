import { ICommand } from '@nestjs/cqrs';

export class CreditCardWasRegisterCommand implements ICommand {
  constructor(public readonly id: string, public readonly cardNumber: string) { }
}
