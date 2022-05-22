import { Module } from '@nestjs/common';

import { DBService } from '@/common/db.service';
import { UsersModule } from '@/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, DBService],
})
export class AppModule {}
