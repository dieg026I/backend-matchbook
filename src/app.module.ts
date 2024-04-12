import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from './users/entities/user.entity';
import { CommuneModule } from './commune/commune.module';
import { RegionModule } from './region/region.module';

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'dieg026',
    password: '95809580Dd',
    database: 'Matchbook_BD',
    entities: [Users],
    synchronize: true, // Solo para entornos de desarrollo
    autoLoadEntities: true,
  }), CommuneModule, RegionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { constructor(private dataSource: DataSource) {}}
