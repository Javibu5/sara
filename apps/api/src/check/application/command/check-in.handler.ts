import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserId } from "../../../user/domain";
import { Check } from "../../domain/model/check";
import { CheckId } from "../../domain/model/check-id";
import { Checks, CHECKS } from "../../domain/repository/checks";
import { CheckInCommand } from "./check-in.command";

@CommandHandler(CheckInCommand)
export class CheckInHandler implements ICommandHandler<CheckInCommand>{
    constructor(
        @Inject(CHECKS) private checks: Checks
    ) { }

    async execute(command: CheckInCommand) {
        const checkId = CheckId.fromString(command.id);
        const employeeId = UserId.fromString(command.employeeId);

        if (await this.checks.find(checkId)) {
            throw new Error();
        }

        const check = Check.withCheckIn(checkId, employeeId, command.inAt);

        this.checks.save(check);
    }
}