import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {

  constructor(@InjectModel(Skill) private skillRepository: typeof Skill) { }

  async create(dto: CreateSkillDto) {
    const skill = dto.skillsForm.map(el => {
      return this.skillRepository.create({
        resumeId: dto.resumeId,
        skill: el.skill,
        level: el.level,
      })
    })
    return skill;
  }

  findAll() {
    return `This action returns all scill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scill`;
  }

  async update(id: number, dto: CreateSkillDto) {
    const deleteExperience = await this.skillRepository.destroy({ where: { resumeId: dto.resumeId } })
    const skill = dto.skillsForm.map(el => {
      return this.skillRepository.create({
        resumeId: dto.resumeId,
        skill: el.skill,
        level: el.level,
      })
    })
    return skill;
  }

  remove(id: number) {
    return `This action removes a #${id} scill`;
  }
}
