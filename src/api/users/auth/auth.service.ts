import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Repository } from 'typeorm';
import { LoginDto, SignupDto } from './dto';
import * as argon from 'argon2' // argon is used to encrypt the data(here for password)
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwt: JwtService,
    private config: ConfigService
  ) { }

  async signup(dto: SignupDto) {
    const hash = await argon.hash(dto.password)
    const user = await this.userRepository.create(
      {
        name: dto.name,
        password: hash,
        email: dto.email
      }
    )
    this.userRepository.save(user);
    return this.signToken(user.id, user.email)
  }

  async login(dto: LoginDto) {
    const user = await this.userRepository.findOne({ where: { email: dto.email } });

    if (!user) {
      throw new ForbiddenException("Credentials incorrect")
    }

    const passwordMatch = await argon.verify(user.password, dto.password) //compare password

    if (!passwordMatch) {
      throw new ForbiddenException("Credentials incorrect")
    }

    return this.signToken(user.id, user.email)
  }

  async signToken(userId: number, email: string): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email: email
    }
    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: '30m', // 3o minutes
      secret: this.config.get('JWT_SECRET_KEY')
    })
    return { access_token: access_token }
  }
}
