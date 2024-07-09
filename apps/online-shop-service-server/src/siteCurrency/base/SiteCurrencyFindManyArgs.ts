/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SiteCurrencyWhereInput } from "./SiteCurrencyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SiteCurrencyOrderByInput } from "./SiteCurrencyOrderByInput";

@ArgsType()
class SiteCurrencyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SiteCurrencyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SiteCurrencyWhereInput, { nullable: true })
  @Type(() => SiteCurrencyWhereInput)
  where?: SiteCurrencyWhereInput;

  @ApiProperty({
    required: false,
    type: [SiteCurrencyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SiteCurrencyOrderByInput], { nullable: true })
  @Type(() => SiteCurrencyOrderByInput)
  orderBy?: Array<SiteCurrencyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SiteCurrencyFindManyArgs as SiteCurrencyFindManyArgs };
