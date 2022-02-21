import { Injectable } from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";

interface userMailAttrs {
  email: string;
  firstName: string;
}

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: userMailAttrs, token: string, password) {
    const url = `example.com/auth/confirm?token=${token}`;
    console.log('мы в мейлере все ок')
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Добро пожаловать в CVHunter',
      // html: `<b>welcome, this your pass ${password}</b>`,
      template: 'confirmation',
      context: {
        name: user.firstName,
        url,
        password,
        email: user.email
      },
    });
  }
}