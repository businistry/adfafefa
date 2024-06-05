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
import { NotaryServicePerformedWhereUniqueInput } from "./NotaryServicePerformedWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NotaryServicePerformedUpdateInput } from "./NotaryServicePerformedUpdateInput";

@ArgsType()
class UpdateNotaryServicePerformedArgs {
  @ApiProperty({
    required: true,
    type: () => NotaryServicePerformedWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NotaryServicePerformedWhereUniqueInput)
  @Field(() => NotaryServicePerformedWhereUniqueInput, { nullable: false })
  where!: NotaryServicePerformedWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NotaryServicePerformedUpdateInput,
  })
  @ValidateNested()
  @Type(() => NotaryServicePerformedUpdateInput)
  @Field(() => NotaryServicePerformedUpdateInput, { nullable: false })
  data!: NotaryServicePerformedUpdateInput;
}

export { UpdateNotaryServicePerformedArgs as UpdateNotaryServicePerformedArgs };
