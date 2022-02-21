import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
import { Interest } from './entities/interest.entity';

@Injectable()
export class InterestService {

  constructor(@InjectModel(Interest) private interestRepository: typeof Interest) { }

  async create(dto: CreateInterestDto) {
    const interest = dto.interestsForm.map(el => {
      return this.interestRepository.create({
        resumeId: dto.resumeId,
        hobby: el.hobby
      })
    })
    return interest;
  }

  findAll() {
    return `This action returns all interest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interest`;
  }

  async update(id: number, dto: CreateInterestDto) {
    const deleteExperience = await this.interestRepository.destroy({ where: { resumeId: dto.resumeId } })
    const interest = dto.interestsForm.map(el => {
      return this.interestRepository.create({
        resumeId: dto.resumeId,
        hobby: el.hobby
      })
    })
    return interest;
  }

  remove(id: number) {
    return `This action removes a #${id} interest`;
  }
}
