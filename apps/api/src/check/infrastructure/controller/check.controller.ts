import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CheckInCommand } from "../../application/command/check-in.command";
import { CheckDto } from "../dto/department.dto";

@Controller('checks')
export class CheckController {
    constructor(
        private commandBus: CommandBus
    ){}

    @Post()
    async CheckIn(@Body() checkDto : CheckDto): Promise<CheckDto> {
        return await this.commandBus.execute( new CheckInCommand( checkDto._id ))
    }
}