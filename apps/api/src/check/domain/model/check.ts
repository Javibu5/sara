import { AggregateRoot } from "@nestjs/cqrs";
import { CheckinWasDone } from "../event/checkin-was-done";
import { CheckId } from "./check-id";
import { Employee } from "./employee";
import { inAt } from "./in-at";
import { isAutoClosed } from "./is-auto-closed";
import { outAt } from "./out-at";

export class Check extends AggregateRoot{
    private _checkId: CheckId;
    private _employee: Employee;
    private _inAt: inAt;
    private _inOut: outAt;
    private _isAutoCosed: isAutoClosed;

    private constructor(){
        super();
    }

    public static add(
         checkId: CheckId,
         employee: Employee,
         inAt: inAt,
         outAt: outAt,
         isAutoClosed: isAutoClosed,
    ):Check {
        const check = new Check();

        check.apply(
            new CheckinWasDone(checkId.value , employee, inAt, outAt, isAutoClosed)
        );
         return check;
    }
    
}