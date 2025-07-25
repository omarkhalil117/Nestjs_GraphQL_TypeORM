import { Body, Controller, Get, Post } from '@nestjs/common';
import { Car } from 'src/cars/cars.entity';
import { CarsService } from 'src/cars/cars.service';
import { addCarDto } from 'src/cars/dto/creatCarDto.dto';

@Controller('car')
export class CarController {

  constructor(private carsService: CarsService) { }

  @Post()
  addCar(@Body() car: addCarDto) {
    return this.carsService.addCar(car);
  }

  @Get()
  getAll() {
    return this.carsService.fetchCars();
  }

}

