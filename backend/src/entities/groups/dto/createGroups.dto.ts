import { ResponsiblePersonOfGroup } from 'src/interfaces';
import { GroupEntity } from '../entities/groups.entity';

export class CreateGroupsDto implements GroupEntity {
  course: number;
  title: string;
  description: string;
  responsiblePerson: ResponsiblePersonOfGroup[];
}
