import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { Prisma } from '@/common/prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const prisma: Prisma = app.get(Prisma);
  prisma.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
