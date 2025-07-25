import { Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Car {
  @Field()
  model: string

  @Field(type => Int)
  cc: number

  @Field(type => Int)
  year: number

  @Field({ nullable: true })
  color?: string
}
