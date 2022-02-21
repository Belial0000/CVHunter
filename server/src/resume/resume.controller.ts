import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Controller('resumes')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) { }

  @Post()
  create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }

  @Get()
  findAll() {
    return this.resumeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.update(+id, createResumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {

    return this.resumeService.remove(+id);
  }
}
