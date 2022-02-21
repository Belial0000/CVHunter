import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { config } from 'dotenv'
import { UserModule } from './user/user.module';
import {User} from "./user/entities/user.entity";
import { TemplateModule } from './template/template.module';
import {Template} from "./template/entities/template.entity";
import { ResumeModule } from './resume/resume.module';
import {Resume} from "./resume/entities/resume.entity";
import {AuthModule} from "./auth/auth.module";
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entities/profile.entity';
import { ExperienceModule } from './experience/experience.module';
import { Experience } from './experience/entities/experience.entity';
import { CourseModule } from './course/course.module';
import { SkillModule } from './skill/skill.module';
import { Course } from './course/entities/course.entity';
import { Skill } from './skill/entities/skill.entity';
import { InterestModule } from './interest/interest.module';
import { Interest } from './interest/entities/interest.entity';
import { MailModule } from './mail/mail.module';
import { PdfModule } from './pdf/pdf.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { Recommendation } from './recommendation/entities/recommendation.entity';
import { LanguageModule } from './language/language.module';
import { Language } from './language/entities/language.entity';
config()

@Module({
  imports: [
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User, Template, Resume, Profile, Experience, Course, Skill, Interest, Recommendation, Language]
      }),
      AuthModule,
      UserModule,
      TemplateModule,
      ResumeModule,
      ProfileModule,
      ExperienceModule,
      CourseModule,
      SkillModule,
      InterestModule,
      MailModule,
      PdfModule,
      RecommendationModule,
      LanguageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
