import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}
