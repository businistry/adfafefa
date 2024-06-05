import { NotaryWhereInput } from "./NotaryWhereInput";
import { NotaryOrderByInput } from "./NotaryOrderByInput";

export type NotaryFindManyArgs = {
  where?: NotaryWhereInput;
  orderBy?: Array<NotaryOrderByInput>;
  skip?: number;
  take?: number;
};
