import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsDate,
} from "class-validator";

export class CreateBranchDto {
  @IsString()
  readonly code: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly name_en: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly address_en: string;

  @IsString()
  @IsOptional()
  readonly parking_info: string;

  @IsString()
  @IsOptional()
  readonly parking_info_en: string;

  @IsString()
  @IsOptional()
  readonly image_url: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsBoolean()
  @IsOptional()
  readonly is_active: boolean;
}
