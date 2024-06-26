/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsDate,
  IsInt,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { NotaryWhereUniqueInput } from "../../notary/base/NotaryWhereUniqueInput";
import { NotaryServicePerformedCreateNestedManyWithoutAppointmentsInput } from "./NotaryServicePerformedCreateNestedManyWithoutAppointmentsInput";
import { EnumAppointmentStatus } from "./EnumAppointmentStatus";

@InputType()
class AppointmentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  client?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duration?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotaryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NotaryWhereUniqueInput)
  @IsOptional()
  @Field(() => NotaryWhereUniqueInput, {
    nullable: true,
  })
  notary?: NotaryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => NotaryServicePerformedCreateNestedManyWithoutAppointmentsInput,
  })
  @ValidateNested()
  @Type(() => NotaryServicePerformedCreateNestedManyWithoutAppointmentsInput)
  @IsOptional()
  @Field(() => NotaryServicePerformedCreateNestedManyWithoutAppointmentsInput, {
    nullable: true,
  })
  notaryServicePerformeds?: NotaryServicePerformedCreateNestedManyWithoutAppointmentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notes?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAppointmentStatus,
  })
  @IsEnum(EnumAppointmentStatus)
  @IsOptional()
  @Field(() => EnumAppointmentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  time?: Date | null;
}

export { AppointmentCreateInput as AppointmentCreateInput };
