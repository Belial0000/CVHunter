import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguageService {

  constructor(@InjectModel(Language) private languageRepository: typeof Language) { }

  async create(dto: CreateLanguageDto) {
    const language = dto.languagesForm.map(el => {
      return this.languageRepository.create({
        resumeId: dto.resumeId,
        language: el.language,
        level: el.level,
      })
    })
    return language;
  }

  findAll() {
    return `This action returns all language`;
  }

  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  async update(id: number, dto: CreateLanguageDto) {
    const deleteExperience = await this.languageRepository.destroy({ where: { resumeId: dto.resumeId } })
    const language = dto.languagesForm.map(el => {
      return this.languageRepository.create({
        resumeId: dto.resumeId,
        language: el.language,
        level: el.level,
      })
    })
    return language;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
