import { AppointmentCreateNestedManyWithoutNotariesInput } from "./AppointmentCreateNestedManyWithoutNotariesInput";

export type NotaryCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutNotariesInput;
  email?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
