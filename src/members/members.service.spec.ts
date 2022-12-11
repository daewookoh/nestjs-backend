import { Test } from '@nestjs/testing';
import { Member } from './entities/member.entity';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

describe('MembersController', () => {
  let membersController: MembersController;
  let membersService: MembersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MembersController],
      providers: [MembersService],
    }).compile();

    membersService = moduleRef.get<MembersService>(MembersService);
    membersController = moduleRef.get<MembersController>(MembersController);
  });

  describe('getMemberById', () => {
    it('should return a member', async () => {
      const result: Member = {
        id: 1,
        first_name: '',
        last_name: '',
        avatar: '',
        email: '',
      };

      jest
        .spyOn(membersService, 'getMemberById')
        .mockImplementation(async () => result);

      expect(await membersController.getMemberById(1)).toBe(result);
    });
  });
});
