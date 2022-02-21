import { Module } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { RecommendationController } from './recommendation.controller';
import { Recommendation } from './entities/recommendation.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [RecommendationController],
  providers: [RecommendationService],
  imports: [
    SequelizeModule.forFeature([Recommendation])
  ]
})
export class RecommendationModule {}
