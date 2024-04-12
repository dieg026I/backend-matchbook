import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

 


}


