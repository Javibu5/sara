import { ICommand } from '@nestjs/cqrs';
import { EditProjectDto } from '@sara/contracts/project';

export class UpdateProjectCommand implements ICommand {
    constructor(
        public readonly id: string,
        public readonly editProjectDto: EditProjectDto
    ) { }
}
