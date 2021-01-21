import { StorableEvent } from "event-sourcing-nestjs";
import { Employee } from "../model/employee";
import { inAt } from "../model/in-at";
import { isAutoClosed } from "../model/is-auto-closed";
import { outAt } from "../model/out-at";

export class CheckinWasDone extends StorableEvent{

    eventAggregate = 'check';
    eventVersion = 1;
  
    constructor(
        public readonly id: string,
        public readonly employee: Employee,
        public readonly inAt: inAt,
        public readonly outAt: outAt,
        public readonly isAutoClosed: isAutoClosed,
    ) {
      super();
    }
}