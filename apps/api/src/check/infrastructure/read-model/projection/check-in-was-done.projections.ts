import { Inject } from "@nestjs/common";
import { IViewUpdater, ViewUpdaterHandler } from "event-sourcing-nestjs";
import { CheckinWasDone } from "../../../domain/event/checkin-was-done";
import { CheckView} from "../schema/check.schema";
import { Model } from 'mongoose';


@ViewUpdaterHandler(CheckinWasDone)
export class CheckInWasDoneProjection implements IViewUpdater<CheckinWasDone>{
    constructor(
        @Inject('CHECK_MODEL') private readonly checkModel: Model<CheckView>){}
   
    async handle(event: CheckinWasDone){
         const checkView = new this.checkModel({
             _id:event.id,
             employeeId : event.employeeId,
             inAt : event.inAt,
             outAt: null,
             isAutoClosed: false,
         })

         await checkView.save();
    }
}