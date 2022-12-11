import { Injectable, NotFoundException } from '@nestjs/common';
import { supabase } from 'src/supabaseClient';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { MembersPage } from './entities/members-page.entity';

@Injectable()
export class MembersService {
  async getAll(): Promise<Member[]> {
    let { data, error, status } = await supabase.from('api_member').select();

    return data as Member[];
  }

  async getMemberListWithQuery(
    page: number,
    per_page: number,
  ): Promise<MembersPage> {
    const from = (page - 1) * per_page;
    const to = from + per_page - 1;

    let { data, count, error, status } = await supabase
      .from('api_member')
      .select('*', { count: 'exact' })
      .order('id', { ascending: false })
      .range(from, to);

    return {
      total: count,
      total_page: Math.ceil(count / per_page),
      data: data as Member[],
    };
  }

  async getMemberById(id: number): Promise<Member> {
    let { data, error, status } = await supabase
      .from('api_member')
      .select()
      .match({ id: id })
      .single();

    return data as Member;
  }

  async deleteMemberById(id: number) {
    let { data, error, status } = await supabase
      .from('api_member')
      .delete()
      .match({ id: id });
  }

  async createMember(memberData: CreateMemberDto) {
    let { data, error, status } = await supabase
      .from('api_member')
      .insert(memberData);

    return true;
  }

  async updateMember(id: number, updateData: UpdateMemberDto) {
    let { data, error, status } = await supabase
      .from('api_member')
      .update(updateData)
      .match({ id });

    return true;
  }
}
