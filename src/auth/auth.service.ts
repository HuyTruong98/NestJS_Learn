import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { IAuth, IRegisBody } from './Dto/auth.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}
  private prisma: PrismaClient = new PrismaClient();

  async login(data: IAuth): Promise<string> {
    const jwtToken = await this.jwtService.sign(
      { data },
      { secret: this.config.get('SECRET_KEY'), expiresIn: '5m' },
    );
    return jwtToken;
  }

  async signup(data: IRegisBody): Promise<boolean> {
    const getEmailByData = await this.findEmail(data?.email);
    if (getEmailByData) {
      throw new HttpException('Email is exits !', HttpStatus.CONFLICT);
    }
    const hasPassword = await this.hasPwd(data.pass_word);
    const newBody = {};
    return true;
  }

  private async findEmail(email: string): Promise<IRegisBody> {
    const getEmail = await this.prisma.user.findFirst({ where: { email } });
    return getEmail;
  }

  private async hasPwd(pwd: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.config.get('SALTROUND'));
    const hash = await bcrypt.hash(pwd, salt);

    return hash;
  }
}
