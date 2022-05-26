import { Prisma } from '@/common/prisma';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: Prisma) {}

  async create(createUserDto: CreateUserDto) {
    await this.checkExistEmail(createUserDto.email);
    return await this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private async checkExistEmail(email) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (user)
      throw new HttpException(
        '이미 존재하는 email 입니다.',
        HttpStatus.FORBIDDEN,
      );
  }
}
