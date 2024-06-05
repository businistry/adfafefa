import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  client?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  notaryId?: SortOrder;
  notes?: SortOrder;
  status?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
