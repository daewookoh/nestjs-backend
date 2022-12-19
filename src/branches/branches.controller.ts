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
import { Branch } from "./entities/branch.entity";
import { BranchesService } from "./branches.service";
import { BranchesPage } from "./entities/branches-page.entity";
import { CreateBranchDto } from "./dto/create-branch.dto";

@Controller("branches")
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Get()
  getBranchListWithQuery(
    @Query("page") page?: number,
    @Query("per_page") per_page?: number
  ): Promise<BranchesPage> {
    return this.branchesService.getBranchListWithQuery(
      page || 1,
      per_page || 5
    );
  }

  @Get(":id")
  getBranchById(@Param("id") branchId: number): Promise<Branch> {
    return this.branchesService.getBranchById(branchId);
  }

  @Post()
  createBranch(@Body() branchData: CreateBranchDto) {
    return this.branchesService.createBranch(branchData);
  }

  @Delete(":id")
  deleteBranchById(@Param("id") branchId: number) {
    return this.branchesService.deleteBranchById(branchId);
  }

  @Put(":id")
  putMember(
    @Param("id") memberId: number,
    @Body() updateData: UpdateMemberDto
  ) {
    return this.branchesService.updateMember(memberId, updateData);
  }

  @Patch(":id")
  patchMember(
    @Param("id") memberId: number,
    @Body() updateData: UpdateMemberDto
  ) {
    return this.branchesService.updateMember(memberId, updateData);
  }
}
