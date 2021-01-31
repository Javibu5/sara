import { AggregateRoot } from "@nestjs/cqrs";
import { UserId } from "../../../user/domain";
import { CheckInWasDone } from "../event/checkin-was-done";
import { CheckOutWasDone } from "../event/checkout-was-done";
import { CheckId } from "./check-id";


export class Check extends AggregateRoot{
    private _checkId: CheckId;
    private _employeeId: UserId;
    private _inAt: Date;
    private _outAt? : Date;
    private _isAutoClosed: boolean;

    private constructor(){
        super();
    }

    public static add(
         checkId: CheckId,
         employeeId: UserId,
         inAt: Date,
    ):Check {
        const check = new Check();

        check.apply(
            new CheckInWasDone(checkId.value , employeeId.value, inAt)
        );

         return check;
    }

    public checkout(outAt : Date) {
        if (outAt === this._outAt) {
            return;
        }

        this.apply(new CheckOutWasDone(this._checkId.value,outAt))
    }

    private onCheckinWasDone(event : CheckInWasDone){
        this._checkId = CheckId.fromString(event.id);
        this._employeeId = UserId.fromString(event.employeeId);
        this._inAt = event.inAt;
        this._outAt = null;
        this._isAutoClosed = false;
    }
    

    private onCheckOutWasDone(event: CheckOutWasDone){
        this._outAt = event.outAt;
    }
}