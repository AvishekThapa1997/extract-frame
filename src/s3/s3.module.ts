import { Module } from '@nestjs/common';
import { S3_CLIENT } from './s3.constant';
import { AppConfigService } from '../config/config.service';
import { S3Client } from '@aws-sdk/client-s3';

@Module({
  providers: [
    {
      provide: S3_CLIENT,
      useFactory(appConfig: AppConfigService) {
        const AWS_REGION = appConfig.get('AWS_REGION');
        const AWS_SECRET_KEY = appConfig.get('AWS_SECRET_KEY');
        const AWS_ACCESS_KEY = appConfig.get('AWS_ACCESS_KEY');
        const s3Client = new S3Client({
          region: AWS_REGION,
          credentials: {
            accessKeyId: AWS_ACCESS_KEY,
            secretAccessKey: AWS_SECRET_KEY,
          },
        });
        return s3Client;
      },
      inject: [AppConfigService],
    },
  ],
  exports: [S3_CLIENT],
})
export class S3Module {}
