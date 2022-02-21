import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./strategies/local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./strategies/jwt.strategy";
import {MailModule} from "../mail/mail.module";
import {UserService} from "../user/user.service";
import {ResumeModule} from "../resume/resume.module";

@Module({
    imports: [
        MailModule,
        UserModule,
        ResumeModule,
        PassportModule,
        JwtModule.register({
            secret: "test",
            signOptions: { expiresIn: '24h'}
        }),
    ],
    exports: [AuthService],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}