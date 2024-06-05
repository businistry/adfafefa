import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotaryWhereUniqueInput } from "../notary/NotaryWhereUniqueInput";
import { NotaryServicePerformedListRelationFilter } from "../notaryServicePerformed/NotaryServicePerformedListRelationFilter";

export type AppointmentWhereInput = {
  client?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  notary?: NotaryWhereUniqueInput;
  notaryServicePerformeds?: NotaryServicePerformedListRelationFilter;
  notes?: StringNullableFilter;
  status?: "Option1";
  time?: DateTimeNullableFilter;
};
