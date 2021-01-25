import { AggregateRoot } from "@nestjs/cqrs";
import { UserId } from "../../../user/domain";
import { CheckinWasDone } from "../event/checkin-was-done";
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
            new CheckinWasDone(checkId.value , employeeId.value, inAt)
        );

         return check;
    }

    private onCheckinWasDone(event : CheckinWasDone){
        this._checkId = CheckId.fromString(event.id);
        this._employeeId = UserId.fromString(event.employeeId);
        this._inAt = event.inAt;
        this._outAt = null;
        this._isAutoClosed = false;
    }
    
}