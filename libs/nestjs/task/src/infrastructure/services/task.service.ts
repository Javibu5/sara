import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateTaskDto, TaskDto } from "@sara/contracts/task"
import { CreateTaskCommand } from "../../application";

export class TaskService {


    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) { }

    async create(taskDto: CreateTaskDto): Promise<void> {
        await this.commandBus.execute(new CreateTaskCommand(taskDto));
    }
    findAll(): Promise<TaskDto[]> {
        return this.queryBus.execute(new GetTasksQuery());
    }
}