import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NotaryServicePerformedModuleBase } from "./base/notaryServicePerformed.module.base";
import { NotaryServicePerformedService } from "./notaryServicePerformed.service";
import { NotaryServicePerformedController } from "./notaryServicePerformed.controller";
import { NotaryServicePerformedResolver } from "./notaryServicePerformed.resolver";

@Module({
  imports: [NotaryServicePerformedModuleBase, forwardRef(() => AuthModule)],
  controllers: [NotaryServicePerformedController],
  providers: [NotaryServicePerformedService, NotaryServicePerformedResolver],
  exports: [NotaryServicePerformedService],
})
export class NotaryServicePerformedModule {}
