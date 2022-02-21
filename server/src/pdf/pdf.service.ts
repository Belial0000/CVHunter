import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit'
const pdf = require('html-pdf');
import templateAuckland from "./documents/templateAuckland";
import templateEdinburgh from "./documents/templateEdinburgh";
import templatePrinceton from "./documents/templatePrinceton";
import templateOtago from "./documents/templateOtago";
import templateBerkeley from "./documents/templateBerkeley";
import templateHarvard from "./documents/templateHarvard";
import templateStanford from "./documents/templateStanford";
import templateCambridge from "./documents/templateCambridge";
import templateOxford from "./documents/templateOxford";
import { register } from "tsconfig-paths";
import { AuthService } from "../auth/auth.service";
import { ResumeService } from "../resume/resume.service";



@Injectable()
export class PdfService {
    constructor(private authService: AuthService, private resumeService: ResumeService) { }

    async create(reqBody, res): Promise<void> {
        const funcTemplateForPDF = () => {
            if (reqBody.templateId === 1) return templateAuckland(reqBody)
            if (reqBody.templateId === 2) return templateEdinburgh(reqBody)
            if (reqBody.templateId === 3) return templatePrinceton(reqBody)
            if (reqBody.templateId === 4) return templateOtago(reqBody)
            if (reqBody.templateId === 5) return templateBerkeley(reqBody)
            if (reqBody.templateId === 6) return templateHarvard(reqBody)
            if (reqBody.templateId === 7) return templateStanford(reqBody)
            if (reqBody.templateId === 8) return templateCambridge(reqBody)
            if (reqBody.templateId === 9) return templateOxford(reqBody)
        }

        const options = { "format": "Tabloid" };
        pdf.create(funcTemplateForPDF(), options).toFile(`./src/pdf/pdf-files/result-${reqBody.email}-${reqBody.templateId}.pdf`, (err) => {
            if (err) res.send(Promise.reject())
            res.send(Promise.resolve());
        });
    }

    async getOne(res, pathPDF): Promise<void> {
        res.sendFile(`${__dirname + '/pdf-files'}/result-${pathPDF}.pdf`);
    }

    async HTMLService(req, res): Promise<void> {
        let arr = [];
        const templateAucklandGenerate = templateAuckland(req)
        const templateBerkeleyGenerate = templateBerkeley(req)
        const templateCambridgeGenerate = templateCambridge(req)
        const templateEdinburghGenerate = templateEdinburgh(req)
        const templateHarvardGenerate = templateHarvard(req)
        const templateOtagoGenerate = templateOtago(req)
        const templateOxfordGenerate = templateOxford(req)
        const templatePrincetonGenerate = templatePrinceton(req)
        const templateStanfordGenerate = templateStanford(req)
        arr.push({ "id": 1, "templateName": "Auckland", "templateContent": templateAucklandGenerate },
            { "id": 2, "templateName": "Edinburgh", "templateContent": templateEdinburghGenerate },
            { "id": 3, "templateName": "Princeton", "templateContent": templatePrincetonGenerate },
            { "id": 4, "templateName": "Otago", "templateContent": templateOtagoGenerate },
            { "id": 5, "templateName": "Berkeley", "templateContent": templateBerkeleyGenerate },
            { "id": 6, "templateName": "Harvard", "templateContent": templateHarvardGenerate },
            { "id": 7, "templateName": "Stanford", "templateContent": templateStanfordGenerate },
            { "id": 8, "templateName": "Cambridge", "templateContent": templateCambridgeGenerate },
            { "id": 9, "templateName": "Oxford", "templateContent": templateOxfordGenerate })
        res.json({ arr })
    }

    async HTMLServiceGetOne(reqBody, res): Promise<string> {
        let lubaya
        if (reqBody.templateId === 1) lubaya = templateAuckland(reqBody)
        if (reqBody.templateId === 2) lubaya = templateEdinburgh(reqBody)
        if (reqBody.templateId === 3) lubaya = templatePrinceton(reqBody)
        if (reqBody.templateId === 4) lubaya = templateOtago(reqBody)
        if (reqBody.templateId === 5) lubaya = templateBerkeley(reqBody)
        if (reqBody.templateId === 6) lubaya = templateHarvard(reqBody)
        if (reqBody.templateId === 7) lubaya = templateStanford(reqBody)
        if (reqBody.templateId === 8) lubaya = templateCambridge(reqBody)
        if (reqBody.templateId === 9) lubaya = templateOxford(reqBody)

        return res.json({ lubaya })

    }

    async createPdfKit(): Promise<Buffer> {
        const pdfBuffer: Buffer = await new Promise(resolve => {
            const doc = new PDFDocument({
                size: 'LETTER',
                bufferPages: true,
            })

            doc.text('hello world', 100, 50)
            doc.end()

            const buffer = []
            doc.on('data', buffer.push.bind(buffer))
            doc.on('end', () => {
                const data = Buffer.concat(buffer)
                resolve(data)
            })
        })
        return pdfBuffer
    }
}
