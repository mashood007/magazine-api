import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Magazine, User, Subscription } from 'src/entities';
import { Repository } from 'typeorm';
import { SubscribeDto } from './dto';
import * as moment from 'moment';

@Injectable()
export class MagazinesService {

  constructor(
    @InjectRepository(Magazine)
    private readonly magazineRepository: Repository<Magazine>,
    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>
  ) { }

  findAll() {
    return this.magazineRepository.find();
  }

  async subscribe(magazineId: number, user: User, body: SubscribeDto) {
    const magazine = await this.magazineRepository.findOne({ where: { id: magazineId } });
    const data = {
      magazine: magazine,
      user: user,
      cost: magazine.price,
      startDate: body.startDate,
      endDate: this.getEndDate(body.startDate)
    }
    const subscription = this.subscriptionRepository.create(data)
    return this.subscriptionRepository.save(subscription);
  }

  getEndDate(startDate: Date): Date {
    const momentStartDate = moment(startDate);
    const endDate = momentStartDate.add(1, 'months');
    return endDate.toDate();
  }
}
