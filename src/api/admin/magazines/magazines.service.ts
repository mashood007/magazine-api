import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto';
import { Repository } from 'typeorm';
import { Magazine } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MagazinesService {

  constructor(
    @InjectRepository(Magazine)
    private readonly magazineRepository: Repository<Magazine>
  ) { }

  create(dto: CreateDto) {
    const newMagazine = this.magazineRepository.create(dto)
    return this.magazineRepository.save(newMagazine);
  }

  async findAll(): Promise<Magazine[]> {
    return this.magazineRepository.find();
  }

  async findOne(id: number): Promise<Magazine> {
    return this.magazineRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<Magazine>): Promise<Magazine> {
    await this.magazineRepository.update(id, user);
    return this.magazineRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.magazineRepository.delete(id);
  }


}
