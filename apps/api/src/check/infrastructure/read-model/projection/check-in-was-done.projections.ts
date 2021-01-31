import { Inject } from "@nestjs/common";
import { IViewUpdater, ViewUpdaterHandler } from "event-sourcing-nestjs";
import { CheckInWasDone } from "../../../domain/event/checkin-was-done";
import { CheckView } from "../schema/check.schema";
import { Model } from 'mongoose';


@ViewUpdaterHandler(CheckInWasDone)
export class CheckInWasDoneProjection implements IViewUpdater<CheckInWasDone>{
    constructor(
        @Inject('CHECK_MODEL') private readonly checkModel: Model<CheckView>) { }

    async handle(event: CheckInWasDone) {
        await this.checkModel.updateOne({ _id: event.id }, { inAt: event.inAt }).exec();
    }
}