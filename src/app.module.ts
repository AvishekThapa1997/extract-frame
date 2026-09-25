import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AppConfigModule } from './config/config.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [AppConfigModule, S3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
