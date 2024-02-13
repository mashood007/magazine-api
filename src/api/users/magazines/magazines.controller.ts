import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Magazine, User } from 'src/entities';
import { MagazinesService } from './magazines.service';
import { AuthGuard } from '@nestjs/passport';
import { currentUser } from 'src/utils/decorator';
import { SubscribeDto } from './dto'

@Controller('users/magazines')
@UseGuards(AuthGuard('jwt-auth'))
@ApiBearerAuth()
export class MagazinesController {
  constructor(private magazinesService: MagazinesService) { }

  @Get()
  @ApiOkResponse({ type: Magazine, isArray: true })
  index(@currentUser() currentUser: User) {
    return this.magazinesService.findAll()
  }

  @Post(':id/subscribe')
  // @ApiOkResponse({ type: Magazine })
  subscribe(@Param('id') id: string, @Body() body: SubscribeDto, @currentUser() currentUser: User) {
    return this.magazinesService.subscribe(+id, currentUser, body)
  }

}
