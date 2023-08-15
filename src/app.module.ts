import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenModule } from './token/token.module';
import { PrincipalModule } from './principal/principal.module';

@Module({
  imports: [TokenModule, PrincipalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
