import {
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { IUser } from './Dto/user.dto';
import { UserService } from './user.service';

@UseGuards(AuthGuard('jwt'))
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
    try {
      return this.userService.getUser(hoTen);
    } catch (error) {
      throw new HttpException('Internal server error', 500);
    }
  }

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: process.cwd() + '/public/img', // dịnh nghĩa nơi lưu của file upload
        filename(req, file, cb) {
          cb(null, Date.now() + file.originalname); // đổi tên file
        },
      }),
    }),
  )
  @Post('/upload')
  upload(@UploadedFile() file: Express.Multer.File): string {
    return file.filename;
  }

  @Put('/debug')
  sum(): number {
    return this.userService.sum();
  }
}
