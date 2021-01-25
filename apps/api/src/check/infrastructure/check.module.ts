import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { EventSourcingModule } from "event-sourcing-nestjs";
import { AuthModule } from "../../auth/auth.module";
import { CheckInHandler } from "../application/command/check-in.handler";
import { CheckProviders } from "./check.providers";
import { CheckController } from "./controller/check.controller";


const CommandHandlers = [CheckInHandler];

@Module({
    controllers: [CheckController],
    imports:[AuthModule, CqrsModule, EventSourcingModule.forFeature()],
    providers:[
        ...CheckProviders,
        ...CommandHandlers,
    ],
})
export class CheckModule {}