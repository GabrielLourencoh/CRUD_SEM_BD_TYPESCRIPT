import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove chaves que nao estao no DTO
      forbidNonWhitelisted: true, // Levanta erro quando a chave nao existe
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
