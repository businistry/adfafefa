import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NotaryServicePerformedResolverBase } from "./base/notaryServicePerformed.resolver.base";
import { NotaryServicePerformed } from "./base/NotaryServicePerformed";
import { NotaryServicePerformedService } from "./notaryServicePerformed.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NotaryServicePerformed)
export class NotaryServicePerformedResolver extends NotaryServicePerformedResolverBase {
  constructor(
    protected readonly service: NotaryServicePerformedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
