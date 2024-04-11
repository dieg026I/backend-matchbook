import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'dieg026',
    password: '95809580Dd',
    database: '',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Solo para entornos de desarrollo
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
