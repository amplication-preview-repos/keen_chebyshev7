import { SiteCurrency as TSiteCurrency } from "../api/siteCurrency/SiteCurrency";

export const SITECURRENCY_TITLE_FIELD = "id";

export const SiteCurrencyTitle = (record: TSiteCurrency): string => {
  return record.id?.toString() || String(record.id);
};
