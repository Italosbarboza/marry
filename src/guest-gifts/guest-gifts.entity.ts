import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('guest_gifts', { database: 'marryme' })
export class GuestGifts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  guest_name: string;

  @Column('text')
  message: string;

  @Column()
  product_id: number;
}
