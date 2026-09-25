import { Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  validateSync,
} from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  @IsNotEmpty()
  AWS_ACCESS_KEY: string;

  @IsString()
  @IsNotEmpty()
  AWS_SECRET_KEY: string;

  @IsString()
  @IsNotEmpty()
  AWS_REGION: string;

  @IsString()
  @IsNotEmpty()
  AWS_BUCKET_NAME: string;

  @IsString()
  @IsNotEmpty()
  NODE_ENV: string;

  @IsString()
  @IsNotEmpty()
  APP_STATE: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  PORT?: number;

  static validate(
    config: Record<string, unknown> = process.env,
  ): EnvironmentVariables {
    return validate(config);
  }
}

export function validate(
  config: Record<string, unknown> = process.env,
): EnvironmentVariables {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    const formattedErrors = errors.map((error) => {
      return { property: error.property, error: error.constraints };
    });
    Logger.error('Envrionemnt variable missing', formattedErrors);
    process.exit(1);
  }

  return validatedConfig;
}
