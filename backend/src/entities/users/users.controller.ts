import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { UsersService } from './users.service';

import { SigninUserDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signin')
  @ApiOperation({ summary: 'Вход пользователя в аккаунт' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 200,
    description: 'User has been successfully signin to account',
  })
  async signin(@Body() signinUserDto: SigninUserDto) {
    console.log(signinUserDto);

    const res = await this.userService.signin(signinUserDto);

    return res;
  }
}
