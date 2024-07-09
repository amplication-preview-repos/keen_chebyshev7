import { Module } from "@nestjs/common";
import { PersonalAreaModuleBase } from "./base/personalArea.module.base";
import { PersonalAreaService } from "./personalArea.service";
import { PersonalAreaController } from "./personalArea.controller";
import { PersonalAreaResolver } from "./personalArea.resolver";

@Module({
  imports: [PersonalAreaModuleBase],
  controllers: [PersonalAreaController],
  providers: [PersonalAreaService, PersonalAreaResolver],
  exports: [PersonalAreaService],
})
export class PersonalAreaModule {}
