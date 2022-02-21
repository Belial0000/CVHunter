import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Resume } from "./entities/resume.entity";
import { Course } from "../course/entities/course.entity";
import { Experience } from "../experience/entities/experience.entity";
import { Interest } from "../interest/entities/interest.entity";
import { Profile } from "../profile/entities/profile.entity";
import { Skill } from "../skill/entities/skill.entity";
import { Recommendation } from "../recommendation/entities/recommendation.entity";
import { Language } from "../language/entities/language.entity";

@Injectable()
export class ResumeService {
  async create(createResumeDto: CreateResumeDto) {
    console.log(createResumeDto);

    return await Resume.create(createResumeDto)
  }

  async findAll() {
    return `This action returns all resume`;
  }

  async findOne(id: number) {
    const resumeFirst = await Resume.findOne({ where: { id } })
    const allContentCourses = await Course.findAll({ where: { resumeId: id } });
    const allContentExperiences = await Experience.findAll({ where: { resumeId: id } });
    const allContentInterests = await Interest.findAll({ where: { resumeId: id } });
    const allContentProfiles = await Profile.findAll({ where: { resumeId: id } });
    const allContentSkills = await Skill.findAll({ where: { resumeId: id } });
    const allContentRecommendations = await Recommendation.findAll({ where: { resumeId: id } });
    const allContentLanguages = await Language.findAll({ where: { resumeId: id } });
    return { templateId: resumeFirst.templateId, resumeId: id, allContentCourses, allContentExperiences, allContentInterests, allContentProfiles, allContentSkills, allContentRecommendations, allContentLanguages }
  }

  async update(id: number, createResumeDto: CreateResumeDto) {
    return await Resume.update({ templateId: createResumeDto.templateId, title: createResumeDto.title }, { where: { id } })
  }

  async remove(id: number) {
    return await Resume.destroy({ where: { id } });
  }
}
