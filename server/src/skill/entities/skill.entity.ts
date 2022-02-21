import { Column, DataType, HasMany, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Resume } from "../../resume/entities/resume.entity";

interface SkillCreationAttrs {
  resumeId: number,
  skill: string,
  level: number,
}

@Table({ tableName: 'Skills' })
export class Skill extends Model<Skill, SkillCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Resume)
  @Column({ type: DataType.INTEGER })
  resumeId: number;

  @Column({ type: DataType.TEXT })
  skill: string;

  @Column({ type: DataType.INTEGER })
  level: number;

  @BelongsTo(() => Resume)
  resume: Resume
}