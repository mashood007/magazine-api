import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { MagazinesModule } from './magazines/magazines.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([User]), MagazinesModule, SubscriptionsModule]

})
export class UsersModule { }
