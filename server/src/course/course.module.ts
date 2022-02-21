import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { Course } from './entities/course.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  imports: [
    SequelizeModule.forFeature([Course])
  ]
})
export class CourseModule {}
