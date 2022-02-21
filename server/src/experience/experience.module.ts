import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceController } from './experience.controller';
import { Experience } from './entities/experience.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService],
  imports: [
    SequelizeModule.forFeature([Experience])
  ]
})
export class ExperienceModule {}
