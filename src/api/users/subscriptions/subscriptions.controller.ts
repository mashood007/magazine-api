import { Controller, Delete, Get, NotFoundException, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Subscription, User } from 'src/entities';
import { currentUser } from 'src/utils/decorator';
import { SubscriptionsService } from './subscriptions.service';

@Controller('users/subscriptions')
@UseGuards(AuthGuard('jwt-auth'))
@ApiBearerAuth()
export class SubscriptionsController {
  constructor(private readonly subscriptionsSerivice: SubscriptionsService) { }

  @Get()
  @ApiOkResponse({ type: Subscription, isArray: true })
  index(@currentUser() currentUser: User) {
    return this.subscriptionsSerivice.findUserSubscriptions(currentUser)
  }

  @Delete(':id')
  async delete(@currentUser() currentUser: User, @Param('id') id: number) {
    const subscription = await this.subscriptionsSerivice.findOne(currentUser, id)
    if (!subscription)
      throw new NotFoundException('Subscription does not exist!');
    await this.subscriptionsSerivice.delete(id);
    return { message: 'Subscription has been canceled successfully' };
  }
}
