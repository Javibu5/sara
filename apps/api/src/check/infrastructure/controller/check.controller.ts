import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { User } from "../../../auth/security/user.decorator";
import { UserView } from "../../../user/application";
import { CheckInCommand } from "../../application/command/check-in.command";
import { CheckDto } from "../dto/check.dto";
import { Roles } from '../../../auth/security/roles.decorator';
import { Role } from '@sara/contracts';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CheckOutCommand } from "../../application/command/check-out.command";
import { RegisterCheckDto } from "../dto/register-check.dto";
import { GetChecksQuery } from "../../application/query/get-checks.query";
import { CheckView } from "../read-model/schema/check.schema";
import { CheckMapper } from "../repository/check.mapper";

@ApiBearerAuth()
@Controller('checks')
export class CheckController {
    constructor(
        private queryBus: QueryBus,
        private commandBus: CommandBus,
        private checkMapper: CheckMapper,
    ) { }

    @Post('in')
    @Roles(Role.Admin)
    async checkIn(@Body() registerCheckDto: RegisterCheckDto, @User() user: UserView): Promise<void> {
        const inAt = new Date();
        await this.commandBus.execute(new CheckInCommand(registerCheckDto.id, user.id, inAt))
    }


    @Post('out')
    @Roles(Role.Admin)
    async checkOut(@Body() registerCheckDto: RegisterCheckDto): Promise<void> {
        const outAt = new Date();
        await this.commandBus.execute(new CheckOutCommand(registerCheckDto.id, outAt))
    }

    @Get()
    @Roles(Role.Admin)
    async findAll(@User() user: UserView): Promise<CheckDto[]> {
        const checks = await this.queryBus.execute<GetChecksQuery, CheckView[]>(
            new GetChecksQuery(user.id)
        );

        return checks.map(this.checkMapper.viewToDto);
    }
}