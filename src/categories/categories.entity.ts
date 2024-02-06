import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories', { database: 'marryme' })
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
