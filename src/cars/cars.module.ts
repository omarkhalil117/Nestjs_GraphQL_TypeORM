import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './cars.entity';
import { CarController } from 'src/car/car.controller';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports: [TypeOrmModule.forFeature([Car]), OwnersModule],
  controllers: [CarController],
  providers: [CarsService, CarsResolver],
  exports: [CarsService]
})
export class CarsModule { }
