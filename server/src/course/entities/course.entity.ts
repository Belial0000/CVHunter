import { Column, DataType, HasMany, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Resume } from "../../resume/entities/resume.entity";

interface CourseCreationAttrs {
  resumeId: number,
  degree: string,
  city: string,
  institution: string,
  dateBegin: string,
  dateFinish: string,
  description: string,
}

@Table({ tableName: 'Courses' })
export class Course extends Model<Course, CourseCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Resume)
  @Column({ type: DataType.INTEGER })
  resumeId: number;

  @Column({ type: DataType.STRING })
  degree: string;

  @Column({ type: DataType.STRING })
  city: string;

  @Column({ type: DataType.STRING })
  institution: string;

  @Column({ type: DataType.STRING })
  dateBegin: string;

  @Column({ type: DataType.STRING })
  dateFinish: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @BelongsTo(() => Resume)
  resume: Resume
}