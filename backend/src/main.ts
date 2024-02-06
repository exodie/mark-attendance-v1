import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';

import { AppModule } from './app.module';
import { TimeControllGuard } from './tools/timeControll.guard';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(new TimeControllGuard());

  const config = new DocumentBuilder()
    .setTitle('ISTracker')
    .setDescription('The tracker API description')
    .setVersion('0.1.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
