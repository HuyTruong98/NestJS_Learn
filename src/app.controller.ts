import { Controller, Get, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Phương thức GET => app.get('/user/getHello', getHello())
  // request: params, query, body, headers
  // response:

  // // Phương thức GET
  @Get('/getHello')
  getHello(@Req() req: Request, @Param('params') params: string): string {
    console.log('🚀 req:', req);
    console.log('🚀 params:', params);
    return this.appService.getHello();
  }

  // Phương thức GET
  @Get()
  getNumber(): number {
    return this.appService.getNumber();
  }
}

// lớp đối tượng
// hàm khởi tạo
// thuộc tính (biến): properties
// phương thức (hàm): method

// từ khóa dẫn xuất
// private
// public
// protected
