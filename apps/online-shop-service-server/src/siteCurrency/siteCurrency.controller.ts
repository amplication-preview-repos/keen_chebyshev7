import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SiteCurrencyService } from "./siteCurrency.service";
import { SiteCurrencyControllerBase } from "./base/siteCurrency.controller.base";

@swagger.ApiTags("siteCurrencies")
@common.Controller("siteCurrencies")
export class SiteCurrencyController extends SiteCurrencyControllerBase {
  constructor(protected readonly service: SiteCurrencyService) {
    super(service);
  }
}
