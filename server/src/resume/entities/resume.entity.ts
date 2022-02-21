import { BelongsTo, Column, DataType, ForeignKey, Model, Table, HasMany } from 'sequelize-typescript';
import { User } from "../../user/entities/user.entity";
import { Template } from "../../template/entities/template.entity";
import { Profile } from '../../profile/entities/profile.entity';
import { Experience } from '../../experience/entities/experience.entity';
import { Course } from '../../course/entities/course.entity';
import { Skill } from '../../skill/entities/skill.entity';
import { Interest } from '../../interest/entities/interest.entity';
import { Recommendation } from '../../recommendation/entities/recommendation.entity';
import { Language } from '../../language/entities/language.entity';

interface ResumeCreationAttrs {
  userId: number,
  templateId: number,
  title: string,
}

@Table({ tableName: 'Resumes' })
export class Resume extends Model<Resume, ResumeCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => Template)
  @Column({ type: DataType.INTEGER })
  templateId: number;

  @Column({ type: DataType.STRING })
  title: string;

  @BelongsTo(() => User)
  user: User

  @BelongsTo(() => Template)
  template: Template


  @HasMany(() => Profile, { onDelete: 'CASCADE' })
  profile: Profile[]

  @HasMany(() => Experience, { onDelete: 'CASCADE' })
  experience: Experience[]

  @HasMany(() => Course, { onDelete: 'CASCADE' })
  course: Course[]

  @HasMany(() => Skill, { onDelete: 'CASCADE' })
  skill: Skill[]

  @HasMany(() => Interest, { onDelete: 'CASCADE' })
  interest: Interest[]

  @HasMany(() => Recommendation, { onDelete: 'CASCADE' })
  recommendation: Recommendation[]

  @HasMany(() => Language, { onDelete: 'CASCADE' })
  language: Language[]
}