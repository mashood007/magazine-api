import { Module } from '@nestjs/common';
import { MagazinesController } from './magazines.controller';
import { MagazinesService } from './magazines.service';
import { Magazine } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    controllers: [MagazinesController],
    providers: [MagazinesService],
    imports: [TypeOrmModule.forFeature([Magazine])]
})
export class MagazinesModule { }
