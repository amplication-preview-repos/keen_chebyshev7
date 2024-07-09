import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalAreaServiceBase } from "./base/personalArea.service.base";

@Injectable()
export class PersonalAreaService extends PersonalAreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
