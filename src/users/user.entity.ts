import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserSituation {
  GUEST = 'guest',
  FIANCE = 'fiance',
}

@Entity('user', { database: 'marryme' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: string;

  @Column({ type: 'enum', enum: UserSituation, default: UserSituation.GUEST })
  situation: UserSituation;
}
