import { Notary } from "../notary/Notary";
import { NotaryServicePerformed } from "../notaryServicePerformed/NotaryServicePerformed";

export type Appointment = {
  client: string | null;
  createdAt: Date;
  date: Date | null;
  duration: number | null;
  id: string;
  location: string | null;
  notary?: Notary | null;
  notaryServicePerformeds?: Array<NotaryServicePerformed>;
  notes: string | null;
  status?: "Option1" | null;
  time: Date | null;
  updatedAt: Date;
};
