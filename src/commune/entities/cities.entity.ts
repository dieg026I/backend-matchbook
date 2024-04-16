
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Region } from '../../region/entities/region.entity';

export class Cities {
  @PrimaryGeneratedColumn()
  id_city: string;

  @Column()
  name: string;  
  
  @OneToOne(type => Region, region=> region.name_region)
  region: Region[];
  

}


