import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  login(): string {
    const jwtToken = this.jwtService.sign(
      { data: 'Hello' },
      { secret: this.config.get('SECRET_KEY'), expiresIn: '5m' },
    );
    return jwtToken;
  }

  signup(): string {
    return;
  }
}