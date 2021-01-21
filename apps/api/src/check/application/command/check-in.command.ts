import { ICommand } from "@nestjs/cqrs";

export class CheckInCommand implements ICommand{ 
        constructor(public readonly id : string) {}
}