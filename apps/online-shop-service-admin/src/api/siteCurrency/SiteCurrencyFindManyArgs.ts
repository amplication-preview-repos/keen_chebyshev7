import { SiteCurrencyWhereInput } from "./SiteCurrencyWhereInput";
import { SiteCurrencyOrderByInput } from "./SiteCurrencyOrderByInput";

export type SiteCurrencyFindManyArgs = {
  where?: SiteCurrencyWhereInput;
  orderBy?: Array<SiteCurrencyOrderByInput>;
  skip?: number;
  take?: number;
};
