import { Resolver, Query, Args, Mutation, Int, Parent, ResolveField } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './cars.entity';
import { addCarDto } from './dto/creatCarDto.dto';
import { OwnersService } from 'src/owners/owners.service';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver(of => Car)
export class CarsResolver {
  constructor(private carsService: CarsService) { }

  @Query(returns => [Car])
  cars(): Promise<Car[]> {
    return this.carsService.fetchCars();
  }

  @Query(returns => Car)
  getCar(@Args('id', { type: () => Int }) id: number) {
    return this.carsService.findOne(id);
  }

  @ResolveField(type => Owner)
  owner(@Parent() car: Car): Promise<Owner> {
    return this.carsService.getOwner(car.ownerId);
  }

  @Mutation(returns => Car)
  createCar(@Args('car') car: addCarDto): Promise<Car> {
    return this.carsService.addCar(car);
  }
}
