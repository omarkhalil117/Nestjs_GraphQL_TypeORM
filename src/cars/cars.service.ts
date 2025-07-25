import { Injectable } from '@nestjs/common';
import { Car } from './cars.entity';

@Injectable()
export class CarsService {
  findAll(): Promise<Car[]> {
    const car = new Car();
    car.model = "Tesla";
    car.year = 2023;
    car.cc = 1600;

    return Promise.resolve([car]);
  }
}
