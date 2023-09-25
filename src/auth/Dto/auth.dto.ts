import { ApiProperty } from '@nestjs/swagger';

export class IAuth {
  @ApiProperty({ description: 'email', type: String })
  email?: string;
  @ApiProperty({ description: 'pass_word', type: String })
  pass_word?: string;
}

export class IRegisBody {
  @ApiProperty({ description: 'email', type: String })
  email?: string;
  @ApiProperty({ description: 'full_name', type: String })
  full_name?: string;
  @ApiProperty({ description: 'pass_word', type: String })
  pass_word?: string;
  role?: string;
  regDt?: string;
  modDt?: string;
  isVerified?: boolean;
}
