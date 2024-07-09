import { PersonalAreaWhereInput } from "./PersonalAreaWhereInput";
import { PersonalAreaOrderByInput } from "./PersonalAreaOrderByInput";

export type PersonalAreaFindManyArgs = {
  where?: PersonalAreaWhereInput;
  orderBy?: Array<PersonalAreaOrderByInput>;
  skip?: number;
  take?: number;
};
