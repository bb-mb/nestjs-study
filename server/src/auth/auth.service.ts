import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '@/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.getUserByEmail(loginDto.email);

    if (user.password === loginDto.password) {
      return {
        message: 'success',
        accessToken: this.jwtService.sign({ email: loginDto.email }),
      };
    } else {
      throw new ForbiddenException();
    }
  }
}
