import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';

import { NameModels } from 'src/interfaces';

import { Users } from 'src/models';

import { SigninUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(NameModels.User)
    private readonly usersModel: Model<Readonly<Users>>,
  ) {}

  public async signin(signinUserDto: SigninUserDto) {
    return 'hyiealsjkdnas';
  }
}
