import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn
  } from 'typeorm';
  
  @Entity('guest_responses', { database: 'marryme' })
  export class GuestResponses {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 255 })
    email: string;
  
    @Column()
    number_of_guests: number;
  
    @Column('text', { nullable: true })
    message_to_couple: string;
  
    @CreateDateColumn()
    created_at: Date;
  }
  