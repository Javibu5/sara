import { Inject } from "@nestjs/common";
import { IViewUpdater, ViewUpdaterHandler } from "event-sourcing-nestjs";
import { Model } from 'mongoose';

import { CheckInWasDone } from "../../../domain/event/checkin-was-done";
import { CheckView } from "../schema/check.schema";


@ViewUpdaterHandler(CheckInWasDone)
export class CheckInWasDoneProjection implements IViewUpdater<CheckInWasDone>{
    constructor(
        @Inject('CHECK_MODEL') private readonly checkModel: Model<CheckView>) { }

    async handle(event: CheckInWasDone) {
        const check = this.checkModel.findById(event.id);
        console.debug(event);
        await this.checkModel.updateOne({ _id: event.id }, { $set: {inAt: event.inAt} }).exec();
    }
}