import { PersonalArea as TPersonalArea } from "../api/personalArea/PersonalArea";

export const PERSONALAREA_TITLE_FIELD = "id";

export const PersonalAreaTitle = (record: TPersonalArea): string => {
  return record.id?.toString() || String(record.id);
};
