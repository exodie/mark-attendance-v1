import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { UsersModule } from './entities/users/users.module';
import { GroupsModule } from './entities/groups/groups.module';

config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URI),
    UsersModule,
    GroupsModule,
  ],
})
export class AppModule {}
