import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  id_region: number;

  @Column()
  name_region: string;

  
}