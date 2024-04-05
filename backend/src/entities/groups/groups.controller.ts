import { Body, Controller, Post, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { GroupsService } from './groups.service';
import { CreateGroupsDto, DeleteGroupsDto } from './dto';
import { GroupEntity } from './entities/groups.entity';

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
    type: GroupEntity,
  })
  async createGroups(@Body() createGroupsDto: CreateGroupsDto) {
    return await this.groupService.create(createGroupsDto);
  }

  @Delete('/')
  @ApiOperation({ summary: '' })
  async deleteGroups(@Body() deleteGroupsDto: DeleteGroupsDto) {
    return deleteGroupsDto;
  }
}
