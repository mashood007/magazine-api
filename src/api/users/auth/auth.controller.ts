import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { AuthService } from './auth.service';

@Controller('users/auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body)
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body)
  }
}
