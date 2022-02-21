import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {

  constructor(@InjectModel(Course) private courseRepository: typeof Course) { }

  async create(dto: CreateCourseDto) {
    const course = dto.coursesForm.map(el => {
      return this.courseRepository.create({
        resumeId: dto.resumeId,
        degree: el.degree,
        city: el.city,
        institution: el.institution,
        dateBegin: el.dateBegin,
        dateFinish: el.dateFinish,
        description: el.description
      })
    })
    return course;
  }

  findAll() {
    return `This action returns all course`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  async update(id: number, dto: CreateCourseDto) {
    const deleteCourses = await this.courseRepository.destroy({ where: { resumeId: dto.resumeId } })
    const updateCourses = dto.coursesForm.map(el => {
      return this.courseRepository.create({
        resumeId: dto.resumeId,
        degree: el.degree,
        city: el.city,
        institution: el.institution,
        dateBegin: el.dateBegin,
        dateFinish: el.dateFinish,
        description: el.description
      })
    })
    return updateCourses;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
