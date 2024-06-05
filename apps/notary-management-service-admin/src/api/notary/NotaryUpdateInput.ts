import { AppointmentUpdateManyWithoutNotariesInput } from "./AppointmentUpdateManyWithoutNotariesInput";

export type NotaryUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutNotariesInput;
  email?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
