import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreditCardWasCreated } from '../../../domain/event/creditCard-was-created';
import { CreditCardDocument, CREDITCARD_PROJECTION } from './credit-card.schema';

@EventsHandler(CreditCardWasCreated)
export class CreditCardWasCreatedProjection
    implements IEventHandler<CreditCardWasCreated>
{
    constructor(
        @InjectModel(CREDITCARD_PROJECTION)
        private readonly creditCards: Model<CreditCardDocument>
    ) { }

    async handle(event: CreditCardWasCreated) {
        const creditCardView = new this.creditCards({
            _id: event.id,
            creditCardNumber: event.card_number
        });

        await creditCardView.save();
    }
}
