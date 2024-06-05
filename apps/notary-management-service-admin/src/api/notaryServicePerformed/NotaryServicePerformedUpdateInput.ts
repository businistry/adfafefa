import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type NotaryServicePerformedUpdateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  serviceCharge?: number | null;
  serviceDescription?: string | null;
};
