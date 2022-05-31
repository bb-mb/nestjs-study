import { Prisma } from '@/common/prisma';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: Prisma) {
    super({
      secretOrKey: 'secret1234',
      jwtFormRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload) {
    const { email } = payload;
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}
