import {
  Body, Controller, Delete, Get, HttpCode, NotFoundException,
  Param, Patch, Post, UsePipes, ValidationPipe
} from '@nestjs/common';
import { MagazinesService } from './magazines.service';
import { CreateDto, UpdateDto } from './dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { Magazine } from 'src/entities';

@Controller('admin/magazines')
export class MagazinesController {

  constructor(private magazinesService: MagazinesService) { }

  @Get()
  @ApiOkResponse({ type: Magazine, isArray: true })
  index() {
    return this.magazinesService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: Magazine })
  read(@Param('id') id: string) {
    return this.magazinesService.findOne(+id)
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  create(@Body() body: CreateDto) {
    return this.magazinesService.create(body)
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateDto) {
    return await this.magazinesService.update(id, body)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const magazine = await this.magazinesService.findOne(id)
    if (!magazine)
      throw new NotFoundException('Magazine does not exist!');
    await this.magazinesService.delete(id);
    return { message: 'Magazine deleted successfully' };
  }

}
