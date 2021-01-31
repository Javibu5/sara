import { Inject } from "@nestjs/common";
import { IViewUpdater, ViewUpdaterHandler } from "event-sourcing-nestjs";
import { Model } from "mongoose";
import { CheckOutWasDone } from "../../../domain/event/checkout-was-done";
import { CheckView } from "../schema/check.schema";



@ViewUpdaterHandler(CheckOutWasDone)
export class CheckOutWasDoneProjection implements IViewUpdater<CheckOutWasDone>{
    constructor(
        @Inject('CHECK_MODEL') private readonly checkModel: Model<CheckView> 
    ){}

    async handle(event: CheckOutWasDone){
       await this.checkModel.updateOne({ _id: event.id}, {outAt: event.outAt}).exec();
    }
}