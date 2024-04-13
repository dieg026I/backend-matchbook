import { Module } from '@nestjs/common';
import { CommuneModule } from './commune.module';
import { CommuneService } from './commune.service';
import { CommuneController } from './commune.controller';

@Module({
    
  imports: [CommuneModule],
  providers: [CommuneService],
  controllers: [CommuneController]})

export class CommuneHttpModule {}