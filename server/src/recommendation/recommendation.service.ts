import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';
import { Recommendation } from './entities/recommendation.entity';

@Injectable()
export class RecommendationService {

  constructor(@InjectModel(Recommendation) private recommendationRepository: typeof Recommendation) { }

  async create(dto: CreateRecommendationDto) {
    const recommendation = dto.recForm.map(el => {
      return this.recommendationRepository.create({
        resumeId: dto.resumeId,
        namecompany: el.namecompany,
        contactperson: el.contactperson,
        number: el.number,
        email: el.email,
      })
    })
    return recommendation;
  }

  findAll() {
    return `This action returns all recommendation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recommendation`;
  }

  async update(id: number, dto: CreateRecommendationDto) {
    const deleteExperience = await this.recommendationRepository.destroy({ where: { resumeId: dto.resumeId } })
    const recommendation = dto.recForm.map(el => {
      return this.recommendationRepository.create({
        resumeId: dto.resumeId,
        namecompany: el.namecompany,
        contactperson: el.contactperson,
        number: el.number,
        email: el.email,
      })
    })
    return recommendation;
  }

  remove(id: number) {
    return `This action removes a #${id} recommendation`;
  }
}
