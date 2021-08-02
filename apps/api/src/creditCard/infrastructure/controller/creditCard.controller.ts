import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterCreditCardDto } from '@sara/contracts';

import { Roles } from '../../../auth/security/roles.decorator';
import { User } from '../../../auth/security/user.decorator';
import { UserView } from '../../../user/application';

@Controller('creditCards')
export class CreditCardController {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}

  @Post('registerCreditCard')
  @Roles(Role.Admin)
  async registerCreditCard(
    @Body() registerCreditCardDto: RegisterCreditCardDto,
    @User() user: UserView
  ): Promise<void> {
    await this.commandBus.execute(new RegisterCreditCardCommand());
  }
}
