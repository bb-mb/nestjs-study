import { Prisma } from '@/common/prisma';
import { UsersModule } from '@/users/users.module';
import { ForbiddenException, HttpException, HttpStatus } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: Prisma;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: 'secret1234',
          signOptions: {
            expiresIn: 60 * 60,
          },
        }),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        UsersModule,
      ],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<Prisma>(Prisma);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login api 테스트', () => {
    const loginDto = {
      email: 'test@test.com',
      password: '123123',
    };

    it('login시 토큰 생성 확인', async () => {
      prisma.user.findUnique = jest.fn().mockReturnValue(loginDto);
      const result = await service.login(loginDto);

      expect(result.token).toBeDefined();
    });

    it('login시 존재하지 않는 유저인 경우 에러 처리', async () => {
      prisma.user.findUnique = jest.fn().mockReturnValue(null);

      await expect(service.login(loginDto)).rejects.toThrowError(
        new HttpException('존재하지 않는 유저입니다.', HttpStatus.FORBIDDEN),
      );
    });

    it('login시 패스워드가 일치하지 않는 경우', async () => {
      prisma.user.findUnique = jest
        .fn()
        .mockReturnValue({ email: 'test@test.com', password: '321123' });

      await expect(service.login(loginDto)).rejects.toThrowError(
        new ForbiddenException(),
      );
    });
  });
});
