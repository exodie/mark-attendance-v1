import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

import { NameModels } from 'src/interfaces';

import { GroupsSchema } from 'src/models/groups.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NameModels.Groups, schema: GroupsSchema },
    ]),
  ],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
