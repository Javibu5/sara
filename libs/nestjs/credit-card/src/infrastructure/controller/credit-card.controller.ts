import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreditCardDto, RegisterCreditCardDto } from '@sara/contracts/credit-card';
import { Role, Roles, User } from '@sara/nestjs/common';
import { UserDto } from '@sara/contracts/user';
import { CreditCardService } from '../services/credit-card.service';


@Controller('creditCards')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) { }

  @Post('registerCreditCard')
  @Roles(Role.Admin)
  async registerCreditCard(
    @Body() registerCreditCardDto: RegisterCreditCardDto,
    @User() user: UserDto
  ): Promise<void> {
    this.creditCardService.newCreditCard(registerCreditCardDto)
  }

  @Get()
  @Roles(Role.Admin)
  async findAll(
    @Res({ passthrough: true }) res: Response
  ): Promise<CreditCardDto[]> {

    try {
      const creditCards = await this.creditCardService.findAll()
    }
  }
}
