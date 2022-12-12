import { Controller, Get } from "@nestjs/common";
import { Branch } from "./entities/branch.entity";
import { BranchesService } from "./branches.service";

@Controller("branches")
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Get()
  getAllBranches(): Promise<Branch[]> {
    return this.branchesService.getAllBranches();
  }
}
