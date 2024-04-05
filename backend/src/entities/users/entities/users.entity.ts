import { ApiProperty } from '@nestjs/swagger';

import { type Group, type User } from 'src/interfaces';

export class UserEntity implements User {
  @ApiProperty({
    example: 'zim01',
    description: 'The login of personal account',
    minimum: 4,
    maximum: 8,
  })
  login: string;

  @ApiProperty({
    example: 'veryhighsecurity',
    description: 'The password of personal account (HASH)',
    minimum: 8,
    maximum: 16,
  })
  password: string;

  @ApiProperty({
    example: 'Admin Adminov',
    description: 'The Name & Surname personal from VK_API',
  })
  name: string;

  @ApiProperty({
    example: 'https://vk.com/... || https://t.me/...',
    description: 'URL to account in social',
  })
  link: string;

  @ApiProperty({
    description: 'Which group is the user linked to as a curator',
  })
  group: Group;
}
