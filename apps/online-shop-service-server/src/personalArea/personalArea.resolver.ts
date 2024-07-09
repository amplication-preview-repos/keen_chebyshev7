import * as graphql from "@nestjs/graphql";
import { PersonalAreaResolverBase } from "./base/personalArea.resolver.base";
import { PersonalArea } from "./base/PersonalArea";
import { PersonalAreaService } from "./personalArea.service";

@graphql.Resolver(() => PersonalArea)
export class PersonalAreaResolver extends PersonalAreaResolverBase {
  constructor(protected readonly service: PersonalAreaService) {
    super(service);
  }
}
