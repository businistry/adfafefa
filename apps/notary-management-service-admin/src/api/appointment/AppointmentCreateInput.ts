import { NotaryWhereUniqueInput } from "../notary/NotaryWhereUniqueInput";
import { NotaryServicePerformedCreateNestedManyWithoutAppointmentsInput } from "./NotaryServicePerformedCreateNestedManyWithoutAppointmentsInput";

export type AppointmentCreateInput = {
  client?: string | null;
  date?: Date | null;
  duration?: number | null;
  location?: string | null;
  notary?: NotaryWhereUniqueInput | null;
  notaryServicePerformeds?: NotaryServicePerformedCreateNestedManyWithoutAppointmentsInput;
  notes?: string | null;
  status?: "Option1" | null;
  time?: Date | null;
};
