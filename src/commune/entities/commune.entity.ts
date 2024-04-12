
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Region } from '../../region/entities/region.entity';

export class Commune {
  @PrimaryGeneratedColumn()
  id_commune: string;

  @Column()
  name_commune: string;  
  
  @OneToOne(type => Region, region=> region.name_region)
  region: Region[];
  
 

 


}


