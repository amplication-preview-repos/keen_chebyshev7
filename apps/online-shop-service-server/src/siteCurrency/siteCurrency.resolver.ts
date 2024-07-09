import * as graphql from "@nestjs/graphql";
import { SiteCurrencyResolverBase } from "./base/siteCurrency.resolver.base";
import { SiteCurrency } from "./base/SiteCurrency";
import { SiteCurrencyService } from "./siteCurrency.service";

@graphql.Resolver(() => SiteCurrency)
export class SiteCurrencyResolver extends SiteCurrencyResolverBase {
  constructor(protected readonly service: SiteCurrencyService) {
    super(service);
  }
}
