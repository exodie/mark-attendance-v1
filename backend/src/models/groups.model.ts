import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import type { Group as IGroup, ResponsiblePersonOfGroup } from 'src/interfaces';

export type GroupsDocument = HydratedDocument<Groups>;

@Schema()
export class Groups implements IGroup {
  @Prop({ default: 1, min: 1, max: 6 })
  course: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [Object], default: [], minlength: 1, maxlength: 3 })
  responsiblePerson: ResponsiblePersonOfGroup[];
}

export const GroupsSchema = SchemaFactory.createForClass(Groups);
