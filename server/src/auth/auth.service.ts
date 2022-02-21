import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/entities/user.entity";
import {CreateUserDto} from "../user/dto/create-user.dto";
import * as bcrypt from 'bcryptjs'
import {MailService} from "../mail/mail.service";
import {nanoid} from "nanoid";
import {ResumeService} from "../resume/resume.service";

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService, private mailService: MailService, private resumeService: ResumeService) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByCond({where: {email}});
        const hashDecoded = await bcrypt.compare(password, user.password)
        if (user && hashDecoded) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    // async validateUser(email: string, password: string): Promise<any> {
    //   const user = await this.usersService.findByCond({where: {email, password}});
    //   if (user && user.password === password) {
    //     const { password, ...result } = user;
    //     return result;
    //   }
    //   return null;
    // }

    generateJwtToken(data: { id: number, email: string }) {
        const payload = { email: data.email, sub: data.id };
        return {token: this.jwtService.sign(payload)}
    }

    async login(user: User) {
        // const { password, ...userData} = user; +временно добавим юзера
        // const payload = { email: user.email, sub: user.id };
        // return {
        //   // ...userData,
        //   access_token: this.jwtService.sign(payload),
        // };
        const jwt = this.generateJwtToken({id: user.id, email: user.email});
        // const userNailInterface = {email: user.email, firstName: user.firstName};
        // await this.mailService.sendUserConfirmation(userNailInterface, jwt.token, 123);
        return {jwt, email: user.email, id: user.id}
    }

    async register(dto: CreateUserDto) {
        const candidate = await this.usersService.findByCond({where: { email: dto.email}})
        if (candidate) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const generateUserPassword = nanoid();
        const hashPassword = await bcrypt.hash(generateUserPassword, 5)
        const user = await this.usersService.create({...dto, password: hashPassword});
        // const resumeCreate = await this.resumeService.create({userId: user.id, templateId: null, title: null});
        const jwt = this.generateJwtToken({id: user.id, email: user.email});
        const userNailInterface = {email: user.email, firstName: user.firstName};
        await this.mailService.sendUserConfirmation(userNailInterface, jwt.token, generateUserPassword);
        // return {jwt, resumeId: resumeCreate.id}
        return {jwt, userId: user.id}
    }
}