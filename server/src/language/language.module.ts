import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { Language } from './entities/language.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [LanguageController],
  providers: [LanguageService],
  imports: [
    SequelizeModule.forFeature([Language])
  ]
})
export class LanguageModule {}
