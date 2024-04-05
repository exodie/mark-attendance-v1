import { UserEntity } from '../entities/users.entity';

export class SigninUserDto implements Partial<UserEntity> {
  login: string;
  password: string;
}
