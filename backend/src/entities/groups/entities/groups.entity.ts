import { ApiProperty } from '@nestjs/swagger';

import type { Group as IGroup, ResponsiblePersonOfGroup } from 'src/interfaces';

export class GroupEntity implements IGroup {
  @ApiProperty({
    example: 2,
    description: 'The number of current course of groups',
  })
  course: number;

  @ApiProperty({
    example: 'ADA-20',
    description: 'The name of groups',
  })
  title: string;

  @ApiProperty({
    example: 'The faculty of cool and cool-less.',
    description: 'The description of groups',
  })
  description: string;

  @ApiProperty({
    default: [],
    description: 'The name and link to social account curator of groups',
  })
  responsiblePerson: ResponsiblePersonOfGroup[];
}
