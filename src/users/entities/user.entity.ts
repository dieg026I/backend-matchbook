import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Commune } from 'src/commune/entities/commune.entity';
import { Region } from 'src/region/entities/region.entity';


@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  rut_user: string;

  @Column()
  dv_user: string;

  @Column()
  name_user: string;
  
  @Column()
  lastname_user: string;

  @Column()
  email_user: string;

  @Column()
  phone_user: number;

  @Column()
  password_users: string;
  
  @Column()
  photo_user: string;

  @OneToOne(type => Commune, commune=> commune.name_commune)
  commune: Commune[];

  @OneToOne(type => Region, region=> region.name_region)
  region: Region[];


}


