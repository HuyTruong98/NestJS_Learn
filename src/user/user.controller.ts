import { Controller, Get, Param, Req } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { IUser } from './Dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get('/getUser/:hoTen')
  getUser(
    @Req() req: Request,
    @Param('hoTen') hoTen: string,
  ): Promise<IUser[]> {
    return this.userService.getUser(hoTen);
  }
}
