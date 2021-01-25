import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { User } from "../../../auth/security/user.decorator";
import { UserView } from "../../../user/application";
import { CheckInCommand } from "../../application/command/check-in.command";
import { CheckDto } from "../dto/check.dto";
import { Roles } from '../../../auth/security/roles.decorator';
import { Role } from '@sara/contracts';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('checks')
export class CheckController {
    constructor(
        private commandBus: CommandBus
    ){}

    @Post()
    @Roles(Role.Admin)
    async CheckIn(@Body() checkDto : CheckDto, @User() user : UserView ): Promise<CheckDto> {
        const inAt = new Date();
        await this.commandBus.execute( new CheckInCommand( checkDto.id, user.id, inAt))
        return checkDto;
    }


    async Checkout(@Body() user : UserView): Promise<UserView> {

        await this.commandBus.execute(new CheckOutCommand(user.id));
        return user;
    }
}