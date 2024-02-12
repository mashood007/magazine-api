import { Module } from '@nestjs/common';
import { MagazinesModule } from './magazines/magazines.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Magazine } from 'src/entities';

@Module({
  imports: [MagazinesModule, TypeOrmModule.forFeature([Magazine])]
})
export class AdminModule { }
