import {Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import {Resume} from "../../resume/entities/resume.entity";

interface TemplateCreationAttrs {
    description: string,
    link: string,
}

@Table({tableName: 'Templates'})
export class Template extends Model<Template, TemplateCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    description: string;

    @Column({type: DataType.STRING})
    link: string;

    @HasMany(() => Resume)
    resumes: Resume[]
}