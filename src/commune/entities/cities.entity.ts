
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Region } from '../../region/entities/region.entity';
@Entity('cities')
export class Cities {
  @PrimaryGeneratedColumn()
  id_city: number;

  @Column()
  name: string;  
  
  @OneToMany(type => Region, region=> region.id_region)
  region: Region[];
  

}


