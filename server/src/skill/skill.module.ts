import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { Skill } from './entities/skill.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [SkillController],
  providers: [SkillService],
  imports: [
    SequelizeModule.forFeature([Skill])
  ]
})
export class SkillModule {}
