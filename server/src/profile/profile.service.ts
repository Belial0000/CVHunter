import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {

  constructor(@InjectModel(Profile) private profileRepository: typeof Profile) { }

  async create(dto: CreateProfileDto) {
    const profile = dto.profilesForm.map(el => {
      return this.profileRepository.create({
        resumeId: dto.resumeId,
        description: el.description
      })
    })
    return profile;
  }

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  async update(id: number, dto: CreateProfileDto) {
    const deleteExperience = await this.profileRepository.destroy({ where: { resumeId: dto.resumeId } })
    const profile = dto.profilesForm.map(el => {
      return this.profileRepository.create({
        resumeId: dto.resumeId,
        description: el.description
      })
    })
    return profile;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
