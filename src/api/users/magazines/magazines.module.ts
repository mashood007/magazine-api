import { Module } from '@nestjs/common';
import { MagazinesService } from './magazines.service';
import { MagazinesController } from './magazines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Magazine } from 'src/entities';

@Module({
  providers: [MagazinesService],
  controllers: [MagazinesController],
  imports: [TypeOrmModule.forFeature([Magazine])]
})
export class MagazinesModule { }
