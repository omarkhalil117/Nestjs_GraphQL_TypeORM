import { BadRequestException, Body, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './cars.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addCarDto } from './dto/creatCarDto.dto';
import { OwnersService } from 'src/owners/owners.service';
import { Owner } from 'src/owners/entities/owner.entity';

@Injectable()
export class CarsService {

  constructor(@InjectRepository(Car) private carRepository: Repository<Car>, private ownersService: OwnersService) { }

  //Graphql
  findAll(): Promise<Car[]> {
    const car = new Car();
    car.model = "Tesla";
    car.year = 2023;
    car.cc = 1600;

    return Promise.resolve([car]);
  }

  addCar(car: addCarDto): Promise<Car> {
    try {
      const newCar = this.carRepository.create(car);
      return this.carRepository.save(newCar);
    } catch (e) {
      throw new BadRequestException(e, 'Failed to add the car');
    }

  }

  async fetchCars(): Promise<Car[]> {
    const cars = await this.carRepository.find();
    return cars;

  }

  async findOne(id: number): Promise<Car> {
    try {
      const car = await this.carRepository.findOneByOrFail({ id })
      return car;
    } catch (err) {
      throw new NotFoundException('Car not found !');
    }

  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownersService.findOne(ownerId);
  }
}
