import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Owner } from "src/owners/entities/owner.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number

  @Column()
  @Field()
  model: string

  @Column()
  @Field(type => Int)
  cc: number

  @Column()
  @Field(type => Int)
  year: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  color?: string

  @Column({ nullable: true })
  @Field(type => Int, { nullable: true })
  ownerId: number

  @ManyToOne(() => Owner, owner => owner.cars)
  @Field(type => Owner)
  owner: Owner
}
