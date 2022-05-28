import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '@/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.getUserByEmail(loginDto.email);

    if (user.password === loginDto.password) {
      return {
        message: 'success',
      };
    }

    return true;
  }
}
