import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BaseExceptionFilter());
  app.enableCors();
  // await app.listen(3000);
  // 他のホストから参照したい場合は0.0.0.0を追記
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
