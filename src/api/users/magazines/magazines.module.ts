import { Module } from '@nestjs/common';
import { MagazinesService } from './magazines.service';
import { MagazinesController } from './magazines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Magazine, Subscription, User } from 'src/entities';

@Module({
  providers: [MagazinesService],
  controllers: [MagazinesController],
  imports: [TypeOrmModule.forFeature([Magazine, User, Subscription])]
})
export class MagazinesModule { }
