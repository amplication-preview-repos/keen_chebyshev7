import { AdminPanel as TAdminPanel } from "../api/adminPanel/AdminPanel";

export const ADMINPANEL_TITLE_FIELD = "id";

export const AdminPanelTitle = (record: TAdminPanel): string => {
  return record.id?.toString() || String(record.id);
};
