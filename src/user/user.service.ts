import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IUser } from './Dto/user.dto';

@Injectable()
export class UserService {
  private prisma: PrismaClient = new PrismaClient();

  getUser(id: number): Promise<IUser> {
    return this.prisma.user.findUnique({
      where: {
        user_id: Number(id),
      },
    });
  }

  sum(): number {
    const one = 2;
    const two = 3;

    for (let i = 0; i < 5; i++) {}

    return one + two;
  }
}

// B1: yarn add prisma @prisma/client
// B2: yarn prisma init
// B3: sửa lại chuỗi kết nối CSDL ở .env, schema.prisma
// B4: yarn prisma db pull
// B5: yarn prisma generate
