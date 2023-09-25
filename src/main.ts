import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // cho phép FE truy cập vào API của mình
  app.use(express.static('.')); // định vị lại đường đẫn để load tài nguyên
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Swagger')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger-ui.html', app, document);

  await app.listen(configService.get<number>('PORT'));
}
bootstrap();

// index.js => express
// yarn start:dev => nodemon

// module
// controller
// provider (service)

// taọ một đối tượng đều có 3 thành phần này
// tên đối tượng . tên thành phần . ts

// user.module.ts => nest g module user
// user.controller.ts => nest g controller user --no-spec
// user.service.ts => nest g service user --no-spec
