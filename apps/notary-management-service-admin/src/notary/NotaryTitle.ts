import { Notary as TNotary } from "../api/notary/Notary";

export const NOTARY_TITLE_FIELD = "name";

export const NotaryTitle = (record: TNotary): string => {
  return record.name?.toString() || String(record.id);
};
