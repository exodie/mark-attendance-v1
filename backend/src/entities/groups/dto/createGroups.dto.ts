import { ResponsiblePersonOfGroup } from 'src/interfaces';
import { Group } from '../entities/groups.entity';

export class CreateGroupsDto implements Group {
  course: number;
  title: string;
  description: string;
  responsiblePerson: ResponsiblePersonOfGroup[];
}
