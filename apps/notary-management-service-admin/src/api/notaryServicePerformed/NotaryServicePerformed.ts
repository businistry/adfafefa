import { Appointment } from "../appointment/Appointment";

export type NotaryServicePerformed = {
  appointment?: Appointment | null;
  createdAt: Date;
  id: string;
  serviceCharge: number | null;
  serviceDescription: string | null;
  updatedAt: Date;
};
