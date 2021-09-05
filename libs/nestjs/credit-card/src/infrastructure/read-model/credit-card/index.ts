import { CreditCardWasCreated } from '../../../domain/event/creditCard-was-created'

export * from './credit-card.schema'

export const projectionHandlers = [
    CreditCardWasCreated
]