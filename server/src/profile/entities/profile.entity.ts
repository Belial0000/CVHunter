import { Column, DataType, HasMany, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Resume } from "../../resume/entities/resume.entity";

interface ProfileCreationAttrs {
  resumeId: number,
  description: string,
}

@Table({ tableName: 'Profiles' })
export class Profile extends Model<Profile, ProfileCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Resume)
  @Column({ type: DataType.INTEGER })
  resumeId: number;

  @Column({ type: DataType.TEXT })
  description: string;

  @BelongsTo(() => Resume)
  resume: Resume
}