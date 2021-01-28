import { Document, Schema } from 'mongoose';

export const CheckSchema = new Schema({
    _id: String,
    employeeId: String,
    inAt: Date,
    outAt: Date,
    isAutoClosed: Boolean,
});


export interface CheckView extends Document{
    readonly _id: string,
    readonly employeeId: string;
    readonly inAt: Date;
    readonly outAt: Date;
    readonly isAutoClosed: boolean; 
}

export const CHECK_MODEL = 'CHECK_MODEL';