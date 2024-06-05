import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotaryService } from "./notary.service";
import { NotaryControllerBase } from "./base/notary.controller.base";

@swagger.ApiTags("notaries")
@common.Controller("notaries")
export class NotaryController extends NotaryControllerBase {
  constructor(
    protected readonly service: NotaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
