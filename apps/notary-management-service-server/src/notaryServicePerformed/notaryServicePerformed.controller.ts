import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotaryServicePerformedService } from "./notaryServicePerformed.service";
import { NotaryServicePerformedControllerBase } from "./base/notaryServicePerformed.controller.base";

@swagger.ApiTags("notaryServicePerformeds")
@common.Controller("notaryServicePerformeds")
export class NotaryServicePerformedController extends NotaryServicePerformedControllerBase {
  constructor(
    protected readonly service: NotaryServicePerformedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
