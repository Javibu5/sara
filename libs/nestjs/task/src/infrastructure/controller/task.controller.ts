import { IdAlreadyRegisteredError } from "@aulasoftwarelibre/nestjs-eventstore";
import { Post, Body, ConflictException, Get, Res, Param, NotFoundException, Put } from "@nestjs/common";
import { catchError, Role, Roles } from '@sara/nestjs/common';
import { CreateTaskDto, TaskDto } from '@sara/contracts/task'
import { TaskService } from "../services";

export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    @Roles(Role.Admin)
    async create(@Body() task: CreateTaskDto): Promise<void> {
        try {
            return await this.taskService.create(task);
        } catch (e) {
            if (e instanceof IdAlreadyRegisteredError) {
                throw new ConflictException(e.message);
            } else {
                throw catchError(e);
            }
        }
    }

    @Get()
    @Roles(Role.Admin)
    async findAll(
        @Res({ passthrough: true }) res: Response
    ): Promise<TaskDto[]> {
        try {
            const tasks = await this.taskService.findAll();

            const length = tasks.length;
            res.setHeader('X-Total-Count', length);
            return tasks;
        } catch (error) {
            throw catchError(error);
        }
    }

    @Get(':id')
    @Roles(Role.Admin)
    async findOne(@Param('id') id: string): Promise<TaskDto> {
        try {
            return this.taskService.findOne(id);
        } catch (e) {
            if (e instanceof IdNotFoundError) {
                throw new NotFoundException('Task not found');
            } else {
                throw catchError(e);
            }
        }
    }

    @Put(':id')
    @Roles(Role.Admin)
    async update(@Param('id') id: string, @Body() taskDto: EditTaskDto) {
        try {
            return await this.taskService.update(id, taskDto);
        } catch (e) {
            if (e instanceof IdNotFoundError) {
                throw new NotFoundException('Task not found');
            } else {
                throw catchError(e);
            }
        }
    }
}
