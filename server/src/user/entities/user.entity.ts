import {Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import {Resume} from "../../resume/entities/resume.entity";

interface UserCreationAttrs {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role: string,
    birthDate: string,
    sex: string,
    photo: string,
    phoneNumber: string,
    postAdr: string,
    postIndex: string,
    city: string,
    placeOfBirth: string,
    familyStatus: string,
    citizenship: string,
    linkedIn: string,
    website: string,
    isActive: boolean
}

@Table({tableName: 'Users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.STRING, allowNull: false})
    firstName: string;

    @Column({type: DataType.STRING, allowNull: false})
    lastName: string;

    @Column({type: DataType.STRING, defaultValue: "USER"})
    role: string;

    @Column({type: DataType.STRING})
    birthDate: string;

    @Column({type: DataType.STRING})
    sex: string;

    @Column({type: DataType.STRING})
    photo: string;

    @Column({type: DataType.STRING})
    phoneNumber: string;

    @Column({type: DataType.STRING})
    postAdr: string;

    @Column({type: DataType.STRING})
    postIndex: string;

    @Column({type: DataType.STRING})
    city: string;

    @Column({type: DataType.STRING})
    placeOfBirth: string;

    @Column({type: DataType.STRING})
    familyStatus: string;

    @Column({type: DataType.STRING})
    citizenship: string;

    @Column({type: DataType.STRING})
    linkedIn: string;

    @Column({type: DataType.STRING})
    website: string;

    @Column({ type: DataType.BOOLEAN, defaultValue: true })
    isActive: boolean;

    @HasMany(() => Resume)
    resumes: Resume[]
}