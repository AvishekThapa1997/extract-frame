import { Global, Module } from '@nestjs/common';
import { AppConfigService } from './config.service';
import { validate } from 'class-validator';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentVariables } from './validation/env.validation';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: EnvironmentVariables.validate,
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
