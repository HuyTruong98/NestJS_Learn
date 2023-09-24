import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Req() req: Request): string {
    const { email } = req.body as any;
    return this.authService.login(email);
  }

  @Post('/sign-up')
  signup(): string {
    return this.authService.signup();
  }
}
