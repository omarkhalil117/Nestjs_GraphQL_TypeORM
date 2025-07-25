import { Field, InputType, Int } from "@nestjs/graphql";
import { IsAlpha, IsInt, IsNumber, MinLength } from "class-validator";

@InputType()
export class addCarDto {
  @IsAlpha()
  @MinLength(2, { message: 'Model name should be at least 2 charachters long.' })
  @Field()
  model: string

  @IsInt()
  @Field(type => Int)
  year: number

  @IsInt()
  @Field(type => Int)
  cc: number

  @IsAlpha()
  @Field({ nullable: true })
  color: string

}
