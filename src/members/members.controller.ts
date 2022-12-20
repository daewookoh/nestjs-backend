import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Patch,
  Body,
  Query,
} from "@nestjs/common";
import { MembersService } from "./members.service";
import { Member } from "./entities/member.entity";
import { CreateMemberDto } from "./dto/create-member.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { MembersPage } from "./entities/members-page.entity";

@Controller("members")
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  getMemberListWithQuery(
    @Query("page") page?: number,
    @Query("per_page") per_page?: number
  ): Promise<MembersPage> {
    return this.membersService.getMemberListWithQuery(page || 1, per_page || 6);
  }

  @Get(":id")
  getMemberById(@Param("id") memberId: number): Promise<Member> {
    return this.membersService.getMemberById(memberId);
  }

  @Post()
  createMember(@Body() memberData: CreateMemberDto) {
    return this.membersService.createMember(memberData);
  }

  @Delete(":id")
  deleteMemberById(@Param("id") memberId: number) {
    return this.membersService.deleteMemberById(memberId);
  }

  @Put(":id")
  putMember(
    @Param("id") memberId: number,
    @Body() updateData: UpdateMemberDto
  ) {
    return this.membersService.updateMember(memberId, updateData);
  }

  @Patch(":id")
  patchMember(
    @Param("id") memberId: number,
    @Body() updateData: UpdateMemberDto
  ) {
    return this.membersService.updateMember(memberId, updateData);
  }
}
