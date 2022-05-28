import { Prisma } from '@/common/prisma';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: Prisma;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, Prisma],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<Prisma>(Prisma);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  describe('userService - create', () => {
    beforeEach(() => {
      prisma.user.findUnique = jest.fn();
      prisma.user.create = jest.fn();
    });

    test('유저 생성 테스트', async () => {
      const result = await service.create({
        email: 'soso01@email.com',
        password: '123123',
      });

      expect(result).toEqual({ message: 'success' });
    });

    test('중복된 유저가 있을 경우 생성 테스트', async () => {
      prisma.user.findUnique = jest.fn().mockReturnValue({ _id: 1 });
      const params = {
        email: 'soso01@email.com',
        password: '123123',
      };

      expect(async () => await service.create(params)).rejects.toThrowError(
        new HttpException('이미 존재하는 email 입니다.', HttpStatus.FORBIDDEN),
      );
    });
  });
});
