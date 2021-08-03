import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterCreditCardDto } from '@sara/contracts/credit-card';
import { catchError, Role, Roles, User } from '@sara/nestjs/common';
import { UserDto } from '@sara/contracts/user';


@Controller('creditCards')
export class CreditCardController {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) { }

  @Post('registerCreditCard')
  @Roles(Role.Admin)
  async registerCreditCard(
    @Body() registerCreditCardDto: RegisterCreditCardDto,
    @User() user: UserDto
  ): Promise<void> {
    //await this.commandBus.execute(new RegisterCreditCardCommand());
  }
}
