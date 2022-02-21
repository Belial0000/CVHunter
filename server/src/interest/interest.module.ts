import { Module } from '@nestjs/common';
import { InterestService } from './interest.service';
import { InterestController } from './interest.controller';
import { Interest } from './entities/interest.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [InterestController],
  providers: [InterestService],
  imports: [
    SequelizeModule.forFeature([Interest])
  ]
})
export class InterestModule {}
