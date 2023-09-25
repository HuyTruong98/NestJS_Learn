import { ApiProperty } from '@nestjs/swagger';

export class IUser {
  user_id?: number;
  full_name?: string;
  email?: string;
  pass_word?: string;
  role?: string;
  regDt?: string;
  modDt?: string;
  isVerified?: boolean;
}

export class FileMulter {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: Express.Multer.File;
}
