import { UserSituation } from '../users.entity';

export interface CreateUserDto {
  name: string;
  email: string;
  age: string;
  situation?: UserSituation;
}
