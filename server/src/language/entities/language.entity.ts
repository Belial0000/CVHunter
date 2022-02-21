import { Column, DataType, HasMany, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Resume } from "../../resume/entities/resume.entity";

interface LanguageCreationAttrs {
  resumeId: number,
  language: string,
  level: string
}

@Table({ tableName: 'Languages' })
export class Language extends Model<Language, LanguageCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Resume)
  @Column({ type: DataType.INTEGER })
  resumeId: number;

  @Column({ type: DataType.TEXT })
  language: string;

  @Column({ type: DataType.TEXT })
  level: string;

  @BelongsTo(() => Resume)
  resume: Resume
}