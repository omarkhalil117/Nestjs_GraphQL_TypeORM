import { forwardRef, Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { CarsModule } from 'src/cars/cars.module';

@Module({
  imports: [TypeOrmModule.forFeature([Owner]), forwardRef(() => CarsModule)],
  providers: [OwnersResolver, OwnersService],
  exports: [OwnersService]
})
export class OwnersModule { }
