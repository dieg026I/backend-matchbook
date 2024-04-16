import { Module } from '@nestjs/common';
import { CitiesService } from './commune.service';
import { CitiesController } from './commune.controller';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CommuneModule {}
