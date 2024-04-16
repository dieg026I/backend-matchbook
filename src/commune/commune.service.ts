import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cities } from './entities/cities.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(Cities)
    private communeRepository: Repository<Cities>,
  ) {}

  async createComune(cities: Cities): Promise<Cities> {
    return await this.communeRepository.save(cities);
  }
  findAll(): Promise<Cities[]> {
    return this.communeRepository.find();
  }

  findOne(id_city: string): Promise<Cities | null> {
    return this.communeRepository.findOneBy({id_city});
  }
  async updateUser(id: string, user: Cities): Promise<Cities> {
    await this.communeRepository.update(id, user);
    return this.findOne(id);
  }
  async removeCity(id_city: string): Promise<void> {
    await this.communeRepository.delete(id_city);
  }
}