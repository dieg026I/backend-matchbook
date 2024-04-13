import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commune } from './entities/commune.entity';

@Injectable()
export class CommuneService {
  constructor(
    @InjectRepository(Commune)
    private communeRepository: Repository<Commune>,
  ) {}

  async createComune(commune: Commune): Promise<Commune> {
    return await this.communeRepository.save(commune);
  }
  findAll(): Promise<Commune[]> {
    return this.communeRepository.find();
  }

  findOne(id_commune: string): Promise<Commune | null> {
    return this.communeRepository.findOneBy({id_commune});
  }
  async updateUser(id: string, user: Commune): Promise<Commune> {
    await this.communeRepository.update(id, user);
    return this.findOne(id);
  }
  async removeRegion(id_commune: string): Promise<void> {
    await this.communeRepository.delete(id_commune);
  }
}