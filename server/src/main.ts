import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { DBService } from '@/common/db.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const dbService: DBService = app.get(DBService);
  dbService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
