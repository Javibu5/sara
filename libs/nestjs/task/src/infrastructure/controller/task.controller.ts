import {
  IdAlreadyRegisteredError,
  IdNotFoundError,
} from '@aulasoftwarelibre/nestjs-eventstore';
import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateTaskDto, EditTaskDto, TaskDto } from '@sara/contracts/task';
import { catchError, Role, Roles } from '@sara/nestjs/common';
import { Response } from 'express';

import { TaskService } from '../services';

@ApiBearerAuth()
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @Roles(Role.Admin)
  async create(@Body() task: CreateTaskDto): Promise<TaskDto> {
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
  async findAll(@Res({ passthrough: true }) res: Response): Promise<TaskDto[]> {
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
    console.log(
      '🚀 ~ file: task.controller.ts ~ line 73 ~ TaskController ~ update ~ taskDto',
      taskDto
    );
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
