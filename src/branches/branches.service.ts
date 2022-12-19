import { Injectable, NotFoundException } from "@nestjs/common";
import { supabase } from "src/supabaseClient";
import { CreateBranchDto } from "./dto/create-branch.dto";
import { UpdateBranchDto } from "./dto/update-branch.dto";
import { Branch } from "./entities/branch.entity";
import { BranchesPage } from "./entities/branches-page.entity";

@Injectable()
export class BranchesService {
  async getBranchListWithQuery(
    page: number,
    per_page: number
  ): Promise<BranchesPage> {
    const from = (page - 1) * per_page;
    const to = from + per_page - 1;

    let { data, count, error, status } = await supabase
      .from("api_branch")
      .select("*", { count: "exact" })
      .order("id", { ascending: false })
      .range(from, to);

    return {
      total: count,
      total_page: Math.ceil(count / per_page),
      data: data as Branch[],
    };
  }

  async getBranchById(id: number): Promise<Branch> {
    let { data, error, status } = await supabase
      .from("api_branch")
      .select()
      .match({ id: id })
      .single();

    return data as Branch;
  }

  async deleteBranchById(id: number) {
    let { data, error, status } = await supabase
      .from("api_branch")
      .delete()
      .match({ id: id });
  }

  async createBranch(branchData: CreateBranchDto) {
    let { data, error, status } = await supabase
      .from("api_branch")
      .insert(branchData);

    return true;
  }

  async updateBranch(id: number, updateData: UpdateBranchDto) {
    let { data, error, status } = await supabase
      .from("api_branch")
      .update(updateData)
      .match({ id });

    return true;
  }
}
