import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './entities/experience.entity';

@Injectable()
export class ExperienceService {

  constructor(@InjectModel(Experience) private experienceRepository: typeof Experience) { }

  async create(dto: CreateExperienceDto) {
    const experience = dto.experiencesForm.map(el => {
      return this.experienceRepository.create({
        resumeId: dto.resumeId,
        position: el.position,
        city: el.city,
        employer: el.employer,
        dateBegin: el.dateBegin,
        dateFinish: el.dateFinish,
        description: el.description
      })
    })
    return experience;
  }

  findAll() {
    return `This action returns all experience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} experience`;
  }

  async update(id: number, dto: CreateExperienceDto) {
    const deleteExperience = await this.experienceRepository.destroy({ where: { resumeId: dto.resumeId } })
    const updateExperience = dto.experiencesForm.map(el => {
      return this.experienceRepository.create({
        resumeId: dto.resumeId,
        position: el.position,
        city: el.city,
        employer: el.employer,
        dateBegin: el.dateBegin,
        dateFinish: el.dateFinish,
        description: el.description
      })
    })
    return updateExperience;
  }

  remove(id: number) {
    return `This action removes a #${id} experience`;
  }
}
