import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription, User } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>
  ) { }

  findUserSubscriptions(user: User) {
    return this.subscriptionRepository.find({
      where: { user: user },
      relations: { magazine: true },
      loadEagerRelations: true
    })
  }

  findOne(user: User, id: number) {
    return this.subscriptionRepository.findOne({ where: { id } });
  }

  delete(id: number) {

  }
}
