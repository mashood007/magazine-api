import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Magazine } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class MagazinesService {

  constructor(
    @InjectRepository(Magazine)
    private readonly magazineRepository: Repository<Magazine>
  ) { }

  findAll() {
    return this.magazineRepository.find();
  }

  subscribe(id: number) {

  }
}
