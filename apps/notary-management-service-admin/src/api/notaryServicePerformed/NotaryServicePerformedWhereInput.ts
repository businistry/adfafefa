import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotaryServicePerformedWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  id?: StringFilter;
  serviceCharge?: FloatNullableFilter;
  serviceDescription?: StringNullableFilter;
};
