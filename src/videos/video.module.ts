import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { S3Module } from '../s3/s3.module';

@Module({
  imports: [S3Module],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
