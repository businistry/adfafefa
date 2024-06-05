import { NotaryServicePerformed as TNotaryServicePerformed } from "../api/notaryServicePerformed/NotaryServicePerformed";

export const NOTARYSERVICEPERFORMED_TITLE_FIELD = "id";

export const NotaryServicePerformedTitle = (
  record: TNotaryServicePerformed
): string => {
  return record.id?.toString() || String(record.id);
};
