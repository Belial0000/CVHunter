import axios from 'axios';
import { saveAs } from 'file-saver';
import {Button} from "antd";


function PdfGenerator() {

    const state = {
        templateId: 'template1',
        email: "a@a.ru",
        firstName: "Saha",
        lastName: "Ivanova",
        birthDate: "01.01.2000",
        sex: "male",
        phoneNumber: "89997779999",
        postAdr: "Филевская улица",
        postIndex: "111111",
        city: "Москва",
        placeOfBirth: "г. Москва",
        familyStatus: "женат",
        citizenship: "РФ",
        linkedIn: "http://lol.ru",
        website: "http://kek.ru",
    }

    const createPdf = async (): Promise<void> => {
        try {
            const { data } = await axios.post('http://localhost:5000/pdf', state, { withCredentials: true })
            console.log(data)
        }catch (e: any) {
            alert(e.message)
            console.warn(e.message)
        }

    }

    const getAndDownloadPdf = async (): Promise<void> => {
        try {
            const res = await axios.get(`http://localhost:5000/pdf/${state.templateId}`, { responseType: 'blob' })
            const pdfBlob = await new Blob([res.data], { type: 'application/pdf' });
            await saveAs(pdfBlob, 'newPdf.pdf');
        }catch (e: any) {
            alert(e.message)
            console.warn(e.message)
        }

    }


    return (
        <>
            <div className="PdfGenerator">
                <Button onClick={createPdf} type="primary" danger>Создать PDF</Button><br/><br/>
                <Button onClick={getAndDownloadPdf} type="primary" danger>Скачать PDF</Button><br/><br/>
            </div>
        </>

    )
}
export default PdfGenerator;

