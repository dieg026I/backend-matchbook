
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Region } from '../../region/entities/region.entity';
@Entity()
export class Cities {
  @PrimaryGeneratedColumn()
  id_city: number;

  @Column()
  name: string;  
  
  @OneToMany(type => Region, region=> region.name_region)
  region: Region[];
  

}


