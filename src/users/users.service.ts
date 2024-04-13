import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUser(user: Users): Promise<Users> {
    return await this.usersRepository.save(user);
  }
  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(rut_user: string): Promise<Users | null> {
    return this.usersRepository.findOneBy({rut_user});
  }
  async updateUser(id: string, user: Users): Promise<Users> {
    await this.usersRepository.update(id, user);
    return this.findOne(id);
  }
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
