import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SiteCurrencyServiceBase } from "./base/siteCurrency.service.base";

@Injectable()
export class SiteCurrencyService extends SiteCurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
