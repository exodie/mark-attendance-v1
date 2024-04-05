import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';

import type { CreateGroupsDto } from './dto';

import { NameModels } from 'src/interfaces';

import { Groups } from 'src/models';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(NameModels.Groups)
    private groupsModel: Model<Readonly<Groups>>,
  ) {}

  public async create(createGroupsDto: CreateGroupsDto) {
    const createdGroups = await new this.groupsModel(createGroupsDto).save();

    return createdGroups;
  }
}
