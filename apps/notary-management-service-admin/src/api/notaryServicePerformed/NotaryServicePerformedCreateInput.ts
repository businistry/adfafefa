import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type NotaryServicePerformedCreateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  serviceCharge?: number | null;
  serviceDescription?: string | null;
};
