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

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(name_user: string): Promise<Users | null> {
    return this.usersRepository.findOneBy({name_user});
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
