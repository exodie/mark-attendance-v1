import { type HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import type { User } from 'src/interfaces';

import { Groups, GroupsSchema } from './groups.model';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users implements User {
  @Prop({ minlength: 4, maxlength: 8 })
  login: string;

  @Prop({ minlength: 8, maxlength: 16 })
  password: string;

  @Prop({ minlength: 2 })
  name: string;

  @Prop()
  link: string;

  @Prop({ type: GroupsSchema })
  group: Groups;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
