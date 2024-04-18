import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cities } from 'src/commune/entities/cities.entity';
import { Region } from 'src/region/entities/region.entity';


@Entity('users')
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

  @ManyToOne(() => Cities, (city) => city.id_city)
  city: Cities;

  @ManyToOne(() => Region, (region) => region.id_region)
  @JoinColumn({ name: 'city_id' })
  region: Region[];


}


