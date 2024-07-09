import { Module } from "@nestjs/common";
import { SiteCurrencyModuleBase } from "./base/siteCurrency.module.base";
import { SiteCurrencyService } from "./siteCurrency.service";
import { SiteCurrencyController } from "./siteCurrency.controller";
import { SiteCurrencyResolver } from "./siteCurrency.resolver";

@Module({
  imports: [SiteCurrencyModuleBase],
  controllers: [SiteCurrencyController],
  providers: [SiteCurrencyService, SiteCurrencyResolver],
  exports: [SiteCurrencyService],
})
export class SiteCurrencyModule {}
