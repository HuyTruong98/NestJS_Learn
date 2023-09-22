import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // cho phép FE truy cập vào API của mình
  app.use(express.static('.')); // định vị lại đường đẫn để load tài nguyên
  await app.listen(8080);
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
