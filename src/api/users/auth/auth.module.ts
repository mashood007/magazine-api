import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { JwtService } from '@nestjs/jwt';
import { JwtStratery } from './strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService, JwtStratery],
  imports: [TypeOrmModule.forFeature([User])]
})
export class AuthModule { }
