import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from './infra/infra.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [InfraModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
