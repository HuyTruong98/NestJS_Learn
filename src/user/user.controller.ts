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
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { FileMulter, IUser } from './Dto/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get('/:id')
  getUser(@Req() req: Request, @Param('id') id: number): Promise<IUser> {
    try {
      return this.userService.getUser(id);
    } catch (error) {
      throw new HttpException('Internal server error', 500);
    }
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'file',
    type: FileMulter,
  })
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
  upload(@UploadedFile() file: FileMulter): FileMulter {
    return file;
  }

  @Put('/debug')
  sum(): number {
    return this.userService.sum();
  }
}
