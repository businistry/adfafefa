import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotaryServiceBase } from "./base/notary.service.base";

@Injectable()
export class NotaryService extends NotaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
