import { Injectable } from "@nestjs/common";
import { Branch } from "./entities/branch.entity";
import { supabase } from "src/supabaseClient";

@Injectable()
export class BranchesService {
  async getAllBranches(): Promise<Branch[]> {
    let { data, error, status } = await supabase.from("api_branch").select();

    return data as Branch[];
  }
}
