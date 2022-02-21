import { Column, DataType, HasMany, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Resume } from "../../resume/entities/resume.entity";

interface RecommendationCreationAttrs {
  resumeId: number,
  namecompany: string,
  contactperson: string,
  number: string,
  email: string,
}

@Table({ tableName: 'Recommendations' })
export class Recommendation extends Model<Recommendation, RecommendationCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Resume)
  @Column({ type: DataType.INTEGER })
  resumeId: number;

  @Column({ type: DataType.TEXT })
  namecompany: string;

  @Column({ type: DataType.TEXT })
  contactperson: string;

  @Column({ type: DataType.TEXT })
  number: string;

  @Column({ type: DataType.TEXT })
  email: string;

  @BelongsTo(() => Resume)
  resume: Resume
}