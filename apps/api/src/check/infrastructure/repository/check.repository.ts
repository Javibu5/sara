import { Injectable } from "@nestjs/common";
import { EventStore, StoreEventPublisher } from "event-sourcing-nestjs";

import { CHECK_AGGREGATE_NAME } from "../../domain/model";
import { Check } from "../../domain/model/check";
import { CheckId } from "../../domain/model/check-id";
import { Checks } from "../../domain/repository/checks";


@Injectable()
export class CheckRepository implements Checks{
    constructor(
        private readonly publisher: StoreEventPublisher,
        private readonly events: EventStore,
    ){}

    async find(checkId: CheckId): Promise<Check> {
        const events = await this.events.getEvents(CHECK_AGGREGATE_NAME, checkId.value);
        if(events.length === 0){
            return null;
        }

        const check : Check = Reflect.construct(Check, []);
        check.loadFromHistory(events);

        return check;

    }
    save(check: Check): void {
        check = this.publisher.mergeObjectContext(check)
        check.commit();
    }

    
}