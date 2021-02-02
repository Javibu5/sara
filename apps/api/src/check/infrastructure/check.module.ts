import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { EventSourcingModule } from "event-sourcing-nestjs";

import { AuthModule } from "../../auth/auth.module";
import { DatabaseModule } from "../../database/database.module";
import { CheckInHandler } from "../application/command/check-in.handler";
import { CheckOutHandler } from "../application/command/check-out.handler";
import { GetChecksHandler } from "../application/query/get-checks.handler";
import { CheckProviders } from "./check.providers";
import { CheckController } from "./controller/check.controller";
import { CheckInWasDoneProjection } from "./read-model/projection/check-in-was-done.projections";
import { CheckOutWasDoneProjection } from "./read-model/projection/check-out-was-done.projection";
import { CheckWasCreatedProjection } from "./read-model/projection/check-was-create.projection";
import { CheckMapper } from "./repository/check.mapper";


const CommandHandlers = [CheckInHandler, CheckOutHandler];

const ProjectionHandlers = [CheckInWasDoneProjection, CheckOutWasDoneProjection, CheckWasCreatedProjection];

const QueryHandlers = [GetChecksHandler];

@Module({
    controllers: [CheckController],
    imports: [AuthModule, CqrsModule, EventSourcingModule.forFeature(), DatabaseModule],
    providers: [
        ...ProjectionHandlers,
        ...CheckProviders,
        ...CommandHandlers,
        ...QueryHandlers,
        CheckMapper,
    ],
})
export class CheckModule { }