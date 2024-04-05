import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { NameModels } from 'src/interfaces';
import { UsersSchema } from 'src/models';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: NameModels.User,
        schema: UsersSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
