import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller';
import {AuthModule} from "../auth/auth.module";
import {ResumeModule} from "../resume/resume.module";

@Module({
  controllers: [PdfController],
  providers: [PdfService],
  imports: [AuthModule, ResumeModule]
})
export class PdfModule {}
