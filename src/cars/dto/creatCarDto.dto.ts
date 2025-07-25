import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class addCarDto {
  @Field()
  model: string

  @Field(type => Int)
  year: number

  @Field(type => Int)
  cc: number

  @Field({ nullable: true })
  color: string

}
