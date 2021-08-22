import { Document, Schema } from 'mongoose';
import { CreditCardDto } from '@sara/contracts/credit-card';

export const CREDITCARD_PROJECTION = 'creditCard';

export type CreditCardDocument = CreditCardDto & Document;

export const CreditCardSchema = new Schema(
    {
        _id: String,
        CreditCardNumber: Number,
        isDeleted: Boolean,

    },
    { versionKey: false, }
)