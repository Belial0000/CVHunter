import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Resume} from "./entities/resume.entity";


@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
  imports: [
    SequelizeModule.forFeature([Resume])
  ],
  exports: [ResumeService]
})
export class ResumeModule {}
