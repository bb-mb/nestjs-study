import { Module } from '@nestjs/common';

import { Prisma } from '@/common/prisma';
import { UsersModule } from '@/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, Prisma],
})
export class AppModule {}
