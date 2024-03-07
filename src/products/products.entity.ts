import { Categories } from 'src/categories/categories.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('products', { database: 'marryme' })
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('text')
  description: string;

  @Column('simple-array')
  images: string[];

  @Column({ type: 'double', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'boolean', default: false })
  isProrate: boolean;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @Column({
    type: 'enum',
    enum: ['groom happy', 'bride happy', 'both happy'],
    default: 'both happy',
  })
  happinessStatus: 'groom happy' | 'bride happy' | 'both happy';

  @ManyToOne(() => Categories, { eager: true })
  @JoinColumn({ name: 'categoryId' })
  category: Categories;

  @Column()
  categoryId: number;

  @Column()
  userId: number;
}
