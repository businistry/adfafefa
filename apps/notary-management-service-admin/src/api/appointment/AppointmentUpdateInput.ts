import { NotaryWhereUniqueInput } from "../notary/NotaryWhereUniqueInput";
import { NotaryServicePerformedUpdateManyWithoutAppointmentsInput } from "./NotaryServicePerformedUpdateManyWithoutAppointmentsInput";

export type AppointmentUpdateInput = {
  client?: string | null;
  date?: Date | null;
  duration?: number | null;
  location?: string | null;
  notary?: NotaryWhereUniqueInput | null;
  notaryServicePerformeds?: NotaryServicePerformedUpdateManyWithoutAppointmentsInput;
  notes?: string | null;
  status?: "Option1" | null;
  time?: Date | null;
};
