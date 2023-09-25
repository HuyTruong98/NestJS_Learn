import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { IAuth, IRegisBody } from './Dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Req() req: Request, @Body() body: IAuth): Promise<string> {
    const token = this.authService.login(body);
    return token;
  }

  @Post('/sign-up')
  signup(@Body() body: IRegisBody): Promise<boolean> {
    return this.authService.signup(body);
  }
}
