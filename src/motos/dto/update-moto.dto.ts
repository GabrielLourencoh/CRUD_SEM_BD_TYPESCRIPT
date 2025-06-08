/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMotoDto } from './create-moto.dto';
import { IsOptional } from 'class-validator';

export class UpdateMotoDto extends PartialType(CreateMotoDto) {
  @IsOptional()
  readonly marca?: string;

  @IsOptional()
  readonly modelo?: string;

  @IsOptional()
  readonly ano?: number;
}
