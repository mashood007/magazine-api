import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from 'src/entities';

@Module({
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
  imports: [TypeOrmModule.forFeature([Subscription])]

})
export class SubscriptionsModule { }
