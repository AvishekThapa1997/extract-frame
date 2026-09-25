import { ListBucketsCommand, type S3Client } from '@aws-sdk/client-s3';
import { Inject, Injectable } from '@nestjs/common';
import { S3_CLIENT } from '../s3/s3.constant';

@Injectable()
export class VideoService {
  @Inject(S3_CLIENT)
  private readonly s3Client: S3Client;

  async findAll() {
    const buckets = await this.s3Client.send(new ListBucketsCommand());
    if (buckets.Buckets) {
      return buckets.Buckets;
    }
    return [];
  }
}
