import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cities } from 'src/commune/entities/cities.entity';
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

  @ManyToOne(() => Cities)
  commune: Cities[];

  @ManyToOne(() => Region)
  region: Region[];


}


