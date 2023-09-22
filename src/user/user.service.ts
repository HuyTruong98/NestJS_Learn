import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IUser } from './Dto/user.dto';

@Injectable()
export class UserService {
  private prisma: PrismaClient = new PrismaClient();

  async getUser(hoTen: string): Promise<IUser[]> {
    return await this.prisma.user.findMany({
      where: {
        full_name: {
          contains: hoTen,
        },
      },
    });
  }
}

// B1: yarn add prisma @prisma/client
// B2: yarn prisma init
// B3: sửa lại chuỗi kết nối CSDL ở .env, schema.prisma
// B4: yarn prisma db pull
// B5: yarn prisma generate
