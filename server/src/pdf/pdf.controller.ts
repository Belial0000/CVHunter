import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { Response, Request } from "express";
import { PdfService } from './pdf.service';


@Controller('pdf')
export class PdfController {
    constructor(private readonly pdfService: PdfService) { }

    @Post('/')
    async postPDF(@Req() req: Request, @Res() res: Response) {
        return this.pdfService.create(req.body, res);
    }

    @Get('/:pathPDF')
    async getPDF(@Req() req: Request, @Res() res: Response, @Param('pathPDF') pathPDF: string): Promise<void> {
        return this.pdfService.getOne(res, pathPDF);
    }

    @Post('/html')
    async HTML(@Req() req: Request, @Res() res: Response, @Param('templateId') templateId: string): Promise<void> {
        return this.pdfService.HTMLService(req.body, res);
    }

    @Post('/htmlGetOneGenerate')
    async HTMLGetOne(@Req() req: Request, @Res() res: Response): Promise<any> {

        return this.pdfService.HTMLServiceGetOne(req.body, res);
    }

    @Get('/pdfkit')
    async getPDFKit(@Res() res: Response): Promise<void> {
        const buffer = await this.pdfService.createPdfKit()
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=example.pdf',
            'Content-Length': buffer.length,
        })
        res.end(buffer)
    }
}
