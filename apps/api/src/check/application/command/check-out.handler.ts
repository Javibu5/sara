import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserId } from "../../../user/domain";
import { Check } from "../../domain/model/check";
import { CheckId } from "../../domain/model/check-id";
import { CHECKS, Checks } from "../../domain/repository/checks";
import { CheckOutCommand } from "./check-out.command";

@CommandHandler(CheckOutCommand)
export class CheckOutHandler implements ICommandHandler<CheckOutCommand>{
    constructor(
        @Inject(CHECKS) private checks: Checks
    ) { }

    async execute(command: CheckOutCommand) {
        const checkId = CheckId.fromString(command.id);
        const employeeId = UserId.fromString(command.employeeId);

        let check = await this.checks.find(checkId);

        if (!check) {
            check = Check.withCheckOut(checkId, employeeId, command.outAt);
            this.checks.save(check);

            return;
        }

        if (check.outAt !== null) {
            throw new Error;
        }

        check.checkOut(command.outAt);
        this.checks.save(check);
    }
} 