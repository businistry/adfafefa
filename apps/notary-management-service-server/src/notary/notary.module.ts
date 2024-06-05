import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NotaryModuleBase } from "./base/notary.module.base";
import { NotaryService } from "./notary.service";
import { NotaryController } from "./notary.controller";
import { NotaryResolver } from "./notary.resolver";

@Module({
  imports: [NotaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [NotaryController],
  providers: [NotaryService, NotaryResolver],
  exports: [NotaryService],
})
export class NotaryModule {}
