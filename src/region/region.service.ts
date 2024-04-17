import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from './entities/region.entity';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>,
  ) {}

  async createRegion(region: Region): Promise<Region> {
    return await this.regionRepository.save(region);
  }
  findAll(): Promise<Region[]> {
    return this.regionRepository.find();
  }

  findOne(id_region: number): Promise<Region | null> {
    return this.regionRepository.findOneBy({id_region});
  }
  async updateRegion(id_region: number, user: Region): Promise<Region> {
    await this.regionRepository.update(id_region, user);
    return this.findOne(+id_region);
  }
  async removeRegion(id: number): Promise<void> {
    await this.regionRepository.delete(+id);
  }
}

