import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { serverConfig } from './config/settings.config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger(bootstrap.name);
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(serverConfig.port, '0.0.0.0');

  logger.log(`Servidor executando na porta ${serverConfig.port}`);
}
bootstrap();

