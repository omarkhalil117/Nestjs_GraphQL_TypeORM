import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './cars.entity';
import { addCarDto } from './dto/creatCarDto.dto';

@Resolver(of => Car)
export class CarsResolver {
  constructor(private carsService: CarsService) { }

  @Query(returns => [Car])
  cars(): Promise<Car[]> {
    return this.carsService.fetchCars();
  }

  @Mutation(returns => Car)
  createCar(@Args('car') car: addCarDto): Promise<Car> {
    return this.carsService.addCar(car);
  }
}
