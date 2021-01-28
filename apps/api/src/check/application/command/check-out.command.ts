import { ICommand } from "@nestjs/cqrs";

export class CheckOutCommand implements ICommand {
    constructor(public readonly id, public readonly outAt) {
        
    }
}