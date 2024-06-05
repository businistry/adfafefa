import { Appointment } from "../appointment/Appointment";

export type Notary = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  licenseNumber: string | null;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
