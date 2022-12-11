import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  readonly first_name: string;

  @IsString()
  readonly last_name: string;

  @IsString()
  readonly avatar: string;

  @IsString()
  readonly email: string;
}
