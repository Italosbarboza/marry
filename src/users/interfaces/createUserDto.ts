import { UserSituation } from '../user.entity';

export interface CreateUserDto {
  name: string;
  email: string;
  age: string;
  situation?: UserSituation;
}
