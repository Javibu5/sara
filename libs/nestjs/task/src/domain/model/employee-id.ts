import { Id } from '@aulasoftwarelibre/nestjs-eventstore';

export class EmployeeId extends Id {
    public static fromString(id: string): EmployeeId {
        return new EmployeeId(id);
    }
}
