import { Column, DataType, HasMany, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Resume } from "../../resume/entities/resume.entity";

interface ExperienceCreationAttrs {
  resumeId: number,
  position: string,
  city: string,
  employer: string,
  dateBegin: string,
  dateFinish: string,
  description: string,
}

@Table({ tableName: 'Experiences' })
export class Experience extends Model<Experience, ExperienceCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Resume)
  @Column({ type: DataType.INTEGER })
  resumeId: number;

  @Column({ type: DataType.STRING })
  position: string;

  @Column({ type: DataType.STRING })
  city: string;

  @Column({ type: DataType.STRING })
  employer: string;

  @Column({ type: DataType.STRING })
  dateBegin: string;

  @Column({ type: DataType.STRING })
  dateFinish: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @BelongsTo(() => Resume)
  resume: Resume
}