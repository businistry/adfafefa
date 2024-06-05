import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "client";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.client?.toString() || String(record.id);
};
