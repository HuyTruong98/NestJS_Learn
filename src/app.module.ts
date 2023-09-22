import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// user
// food
// product

// @Module, @Controller, @Injectable => Decorator => thực hiện các tác vụ khác nhau
// yarn add @nestjs/config
// ConfigModule => kết nối thư viện Config vào server để tất cả các module khác đều sử dụng được
