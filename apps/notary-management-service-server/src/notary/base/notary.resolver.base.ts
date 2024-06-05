/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Notary } from "./Notary";
import { NotaryCountArgs } from "./NotaryCountArgs";
import { NotaryFindManyArgs } from "./NotaryFindManyArgs";
import { NotaryFindUniqueArgs } from "./NotaryFindUniqueArgs";
import { CreateNotaryArgs } from "./CreateNotaryArgs";
import { UpdateNotaryArgs } from "./UpdateNotaryArgs";
import { DeleteNotaryArgs } from "./DeleteNotaryArgs";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { NotaryService } from "../notary.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Notary)
export class NotaryResolverBase {
  constructor(
    protected readonly service: NotaryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Notary",
    action: "read",
    possession: "any",
  })
  async _notariesMeta(
    @graphql.Args() args: NotaryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Notary])
  @nestAccessControl.UseRoles({
    resource: "Notary",
    action: "read",
    possession: "any",
  })
  async notaries(@graphql.Args() args: NotaryFindManyArgs): Promise<Notary[]> {
    return this.service.notaries(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Notary, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Notary",
    action: "read",
    possession: "own",
  })
  async notary(
    @graphql.Args() args: NotaryFindUniqueArgs
  ): Promise<Notary | null> {
    const result = await this.service.notary(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Notary)
  @nestAccessControl.UseRoles({
    resource: "Notary",
    action: "create",
    possession: "any",
  })
  async createNotary(@graphql.Args() args: CreateNotaryArgs): Promise<Notary> {
    return await this.service.createNotary({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Notary)
  @nestAccessControl.UseRoles({
    resource: "Notary",
    action: "update",
    possession: "any",
  })
  async updateNotary(
    @graphql.Args() args: UpdateNotaryArgs
  ): Promise<Notary | null> {
    try {
      return await this.service.updateNotary({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Notary)
  @nestAccessControl.UseRoles({
    resource: "Notary",
    action: "delete",
    possession: "any",
  })
  async deleteNotary(
    @graphql.Args() args: DeleteNotaryArgs
  ): Promise<Notary | null> {
    try {
      return await this.service.deleteNotary(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Appointment], { name: "appointments" })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async findAppointments(
    @graphql.Parent() parent: Notary,
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    const results = await this.service.findAppointments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}