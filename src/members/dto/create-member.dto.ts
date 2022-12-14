import { IsString, IsNumber, IsOptional, IsBoolean } from "class-validator";

export class CreateMemberDto {
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
  readonly is_smoking: boolean;
}
