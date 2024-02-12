import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([User])]

})
export class UsersModule { }
