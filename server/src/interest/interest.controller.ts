import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { InterestService } from './interest.service';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';

@Controller('interests')
export class InterestController {
  constructor(private readonly interestService: InterestService) { }

  @Post()
  create(@Body() dto: CreateInterestDto) {
    return this.interestService.create(dto);
  }

  @Get()
  findAll() {
    return this.interestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interestService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateInterestDto) {
    return this.interestService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interestService.remove(+id);
  }
}
