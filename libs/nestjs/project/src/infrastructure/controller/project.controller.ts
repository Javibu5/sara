import { IdAlreadyRegisteredError } from '@aulasoftwarelibre/nestjs-eventstore';
import { Body, ConflictException, Get, Post, Res } from '@nestjs/common';
import { CreateProjectDto, ProjectDto } from '@sara/contracts/project';
import { catchError, Role, Roles } from '@sara/nestjs/common';
import { Response } from 'express';

import { ProjectService } from '../services/project.service';

export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @Roles(Role.Admin)
  async create(@Body() project: CreateProjectDto): Promise<void> {
    try {
      return await this.projectService.create(project);
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
  ): Promise<ProjectDto[]> {
    try {
      const projects = await this.projectService.findAll();

      const length = projects.length;
      res.setHeader('X-Total-Count', length);
      return projects;
    } catch (error) {
      throw catchError(error);
    }
  }
}
