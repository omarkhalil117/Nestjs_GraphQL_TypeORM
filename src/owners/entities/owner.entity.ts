import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Car } from 'src/cars/cars.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Car, car => car.owner)
  @Field(type => [Car], { nullable: true })
  cars?: Car[];
}
