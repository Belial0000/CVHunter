import { Column, DataType, HasMany, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Resume } from "../../resume/entities/resume.entity";

interface InterestCreationAttrs {
  resumeId: number,
  hobby: string,
}

@Table({ tableName: 'Interests' })
export class Interest extends Model<Interest, InterestCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Resume)
  @Column({ type: DataType.INTEGER })
  resumeId: number;

  @Column({ type: DataType.TEXT })
  hobby: string;

  @BelongsTo(() => Resume)
  resume: Resume
}
