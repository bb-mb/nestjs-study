import { Prisma } from '@/common/prisma';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: Prisma) {}

  async create(createUserDto: CreateUserDto) {
    if (await this.checkExistEmail(createUserDto.email)) {
      throw new HttpException(
        '이미 존재하는 email 입니다.',
        HttpStatus.FORBIDDEN,
      );
    }

    await this.prisma.user.create({ data: createUserDto });
    return { message: 'success' };
  }

  private async checkExistEmail(email) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    return !!user;
  }

  async getUserByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new HttpException(
        '존재하지 않는 유저입니다.',
        HttpStatus.FORBIDDEN,
      );
    }

    return user;
  }
}
