import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ProjectDto } from '../../../../../contracts/project/src';
import { IProjectFinder } from '../../application';
import {
  PROJECT_PROJECTION,
  ProjectDocument,
} from '../read-model/project.schema';

Injectable();
export class ProjecFinder implements IProjectFinder {
  constructor(
    @InjectModel(PROJECT_PROJECTION)
    private readonly projects: Model<ProjectDocument>
  ) {}
  async findAll(): Promise<ProjectDto[]> {
    const project = await this.projects.find().lean();

    return project.map((project) => new ProjectDto(project));
  }
}
