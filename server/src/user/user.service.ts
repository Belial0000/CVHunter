import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { InjectModel } from "@nestjs/sequelize";
import { FindOptions } from "sequelize";
import {Resume} from "../resume/entities/resume.entity";
@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) { }

  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findById(id: number) {
    return await this.userRepository.findOne({ where: { id }, include: [Resume] })
  }

  async findByCond(cond: FindOptions<User>) {
    //console.log(cond) //{ where: { email: 'mail@mail', password: '111' }}
    const newCond = { ...cond, ...{ raw: true } }
    const user = await this.userRepository.findOne(newCond);
    return user;
  }

  // findByCond(cond: LoginUserDto) {
  //   return this.userRepository.findOne({where: cond})
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

}
