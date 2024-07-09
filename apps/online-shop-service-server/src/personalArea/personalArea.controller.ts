import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PersonalAreaService } from "./personalArea.service";
import { PersonalAreaControllerBase } from "./base/personalArea.controller.base";

@swagger.ApiTags("personalAreas")
@common.Controller("personalAreas")
export class PersonalAreaController extends PersonalAreaControllerBase {
  constructor(protected readonly service: PersonalAreaService) {
    super(service);
  }
}
