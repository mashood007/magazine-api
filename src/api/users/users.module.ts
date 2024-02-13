import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { MagazinesModule } from './magazines/magazines.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([User]), MagazinesModule]

})
export class UsersModule { }
