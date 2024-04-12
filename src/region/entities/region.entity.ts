import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id_region: string;

  @Column()
  name_region: string;

  
}