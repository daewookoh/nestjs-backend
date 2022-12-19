import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsDate,
} from "class-validator";

export class CreateBranchDto {
  @IsString()
  readonly first_name: string;

  @IsString()
  readonly last_name: string;

  @IsString()
  readonly avatar: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly gender: string;

  @IsBoolean()
  @IsOptional()
  readonly is_smoking: boolean;

  @IsString()
  @IsOptional()
  readonly birth_date: string;

  @IsString()
  @IsOptional()
  readonly mobile: string;

  @IsString()
  @IsOptional()
  readonly memo: string;

  @IsString()
  @IsOptional()
  readonly editor: string;

  @IsString()
  @IsOptional()
  readonly blood_type: string;
}
