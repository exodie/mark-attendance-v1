import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { GroupsService } from './groups.service';
import { CreateGroupsDto } from './dto/createGroups.dto';
import { Group } from './entities/groups.entity';

@ApiTags('Groups')
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupService: GroupsService) {}

  @Post('/')
  @ApiOperation({ summary: 'Создание группы' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 200,
    description: 'Groups has been created.',
    type: Group,
  })
  async createGroups(@Body() createGroupsDto: CreateGroupsDto) {
    return await this.groupService.create(createGroupsDto);
  }
}
