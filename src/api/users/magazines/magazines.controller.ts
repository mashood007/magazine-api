import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Magazine, User } from 'src/entities';
import { MagazinesService } from './magazines.service';
import { AuthGuard } from '@nestjs/passport';
import { currentUser } from 'src/utils/decorator';

@Controller('users/magazines')
@UseGuards(AuthGuard('jwt-auth'))
@ApiBearerAuth()
export class MagazinesController {
  constructor(private magazinesService: MagazinesService) { }

  @Get()
  @ApiOkResponse({ type: Magazine, isArray: true })
  index(@currentUser() currentUser: User) {
    console.log(currentUser, 'currentUser')
    return this.magazinesService.findAll()
  }

  @Post(':id/subscribe')
  @ApiOkResponse({ type: Magazine })
  subscribe(@Param('id') id: string) {
    return this.magazinesService.subscribe(+id)
  }

}
