import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotaryServicePerformedServiceBase } from "./base/notaryServicePerformed.service.base";

@Injectable()
export class NotaryServicePerformedService extends NotaryServicePerformedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
