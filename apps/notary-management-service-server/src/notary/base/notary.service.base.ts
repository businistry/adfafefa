/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Notary as PrismaNotary,
  Appointment as PrismaAppointment,
} from "@prisma/client";

export class NotaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.NotaryCountArgs, "select">): Promise<number> {
    return this.prisma.notary.count(args);
  }

  async notaries<T extends Prisma.NotaryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotaryFindManyArgs>
  ): Promise<PrismaNotary[]> {
    return this.prisma.notary.findMany<Prisma.NotaryFindManyArgs>(args);
  }
  async notary<T extends Prisma.NotaryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotaryFindUniqueArgs>
  ): Promise<PrismaNotary | null> {
    return this.prisma.notary.findUnique(args);
  }
  async createNotary<T extends Prisma.NotaryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotaryCreateArgs>
  ): Promise<PrismaNotary> {
    return this.prisma.notary.create<T>(args);
  }
  async updateNotary<T extends Prisma.NotaryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotaryUpdateArgs>
  ): Promise<PrismaNotary> {
    return this.prisma.notary.update<T>(args);
  }
  async deleteNotary<T extends Prisma.NotaryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotaryDeleteArgs>
  ): Promise<PrismaNotary> {
    return this.prisma.notary.delete(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.notary
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }
}