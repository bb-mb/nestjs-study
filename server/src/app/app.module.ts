import { Module } from '@nestjs/common';

import { Prisma } from '@/common/prisma';
import { UsersModule } from '@/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, Prisma],
})
export class AppModule {}
