import axios from 'axios';
import { Modal, Input, Button } from 'antd';
import Frame from 'react-frame-component';
import { FC, useEffect, useState } from "react";
import './index.css'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { saveAs } from 'file-saver';
import { setCookie } from "nookies";
import { useAction } from '../../hooks/useAction';
import { useNavigate } from 'react-router';


//@ts-ignore
export default function GenerateHTMLTemplates({ prev }) {
  const [data, setData] = useState<any>([])
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>([]);
  const [targetTemplate, setTargetTemplate] = useState<boolean>(false);
  const { userForm, allForms } = useTypedSelector(state => state.forms)
  const { activeResume } = useTypedSelector(state => state.resumes)
  const { token: tokenRedux, data: dataRedux } = useTypedSelector(state => state.user)
  const navigate = useNavigate()
  const { initUser, initToken, deleteActiveResume, deleteAll } = useAction()
  const { coursesForm, experiencesForm, interestsForm, profilesForm, skillsForm, recForm, languagesForm } = allForms

  const getAndDownloadPdf = async (): Promise<any> => {
    if (!targetTemplate) {
      alert('Выберите шаблон!')
      return
    }

    if (tokenRedux && activeResume) {

      try {
        const res = await axios.get(`http://localhost:5000/pdf/${userForm.email}-${modalContent[0]}`, { responseType: 'blob' })
        const pdfBlob = await new Blob([res.data], { type: 'application/pdf' });
        await saveAs(pdfBlob, `CV-${modalContent[0]}.pdf`);

        const resumeUpdate = await axios.put(`http://localhost:5000/resumes/${activeResume}`, { templateId: modalContent[0], title: modalContent[1] }, { withCredentials: true })

        if (coursesForm.length !== 0) {
          const coursesCreate = await axios.put(`http://localhost:5000/courses/${activeResume}`, { resumeId: activeResume, coursesForm }, { withCredentials: true });
        }
        if (experiencesForm.length !== 0) {
          const experiencesCreate = await axios.put(`http://localhost:5000/experiences/${activeResume}`, { resumeId: activeResume, experiencesForm }, { withCredentials: true });
        }
        if (interestsForm.length !== 0) {
          const interestsCreate = await axios.put(`http://localhost:5000/interests/${activeResume}`, { resumeId: activeResume, interestsForm }, { withCredentials: true });
        }
        if (profilesForm.length !== 0) {
          const profilesCreate = await axios.put(`http://localhost:5000/profiles/${activeResume}`, { resumeId: activeResume, profilesForm }, { withCredentials: true });
        }
        if (skillsForm.length !== 0) {
          const skillsCreate = await axios.put(`http://localhost:5000/skills/${activeResume}`, { resumeId: activeResume, skillsForm }, { withCredentials: true });
        }
        if (recForm.length !== 0) {
          const recCreate = await axios.put(`http://localhost:5000/recommendations/${activeResume}`, { resumeId: activeResume, recForm }, { withCredentials: true });
        }
        if (languagesForm.length !== 0) {
          const languagesCreate = await axios.put(`http://localhost:5000/languages/${activeResume}`, { resumeId: activeResume, languagesForm }, { withCredentials: true });
        }
        deleteAll()
        deleteActiveResume()
        navigate('/profile')
      } catch (e: any) {
        alert(e.message)
        console.warn(e.message)
      }

      return

    }


    if (tokenRedux) {
      try {
        const res = await axios.get(`http://localhost:5000/pdf/${userForm.email}-${modalContent[0]}`, { responseType: 'blob' })
        const pdfBlob = await new Blob([res.data], { type: 'application/pdf' });
        await saveAs(pdfBlob, `CV-${modalContent[0]}.pdf`);

        const resume = await axios.post('http://localhost:5000/resumes', { userId: dataRedux.userId, templateId: modalContent[0], title: modalContent[1] }, { withCredentials: true })

        if (coursesForm.length !== 0) {
          const coursesCreate = await axios.post(`http://localhost:5000/courses`, { resumeId: resume.data.id, coursesForm }, { withCredentials: true });
        }
        if (experiencesForm.length !== 0) {
          const experiencesCreate = await axios.post(`http://localhost:5000/experiences`, { resumeId: resume.data.id, experiencesForm }, { withCredentials: true });
        }
        if (interestsForm.length !== 0) {
          const interestsCreate = await axios.post(`http://localhost:5000/interests`, { resumeId: resume.data.id, interestsForm }, { withCredentials: true });
        }
        if (profilesForm.length !== 0) {
          const profilesCreate = await axios.post(`http://localhost:5000/profiles`, { resumeId: resume.data.id, profilesForm }, { withCredentials: true });
        }
        if (skillsForm.length !== 0) {
          const skillsCreate = await axios.post(`http://localhost:5000/skills`, { resumeId: resume.data.id, skillsForm }, { withCredentials: true });
        }
        if (recForm.length !== 0) {
          const recCreate = await axios.post(`http://localhost:5000/recommendations`, { resumeId: resume.data.id, recForm }, { withCredentials: true });
        }
        if (languagesForm.length !== 0) {
          const languagesCreate = await axios.post(`http://localhost:5000/languages`, { resumeId: resume.data.id, languagesForm }, { withCredentials: true });
        }
        deleteAll()
        navigate('/profile')
      } catch (e: any) {
        alert(e.message)
        console.warn(e.message)
      }

      return
    }



    try {
      const res = await axios.get(`http://localhost:5000/pdf/${userForm.email}-${modalContent[0]}`, { responseType: 'blob' })
      const pdfBlob = await new Blob([res.data], { type: 'application/pdf' });
      await saveAs(pdfBlob, `CV-${modalContent[0]}.pdf`);
      const regUser = await axios.post(`http://localhost:5000/auth/register`, userForm, { withCredentials: true })

      const resume = await axios.post('http://localhost:5000/resumes', { userId: regUser.data.userId, templateId: modalContent[0], title: modalContent[1] }, { withCredentials: true })

      if (coursesForm.length !== 0) {
        const coursesCreate = await axios.post(`http://localhost:5000/courses`, { resumeId: resume.data.id, coursesForm }, { withCredentials: true });
      }
      if (experiencesForm.length !== 0) {
        const experiencesCreate = await axios.post(`http://localhost:5000/experiences`, { resumeId: resume.data.id, experiencesForm }, { withCredentials: true });
      }
      if (interestsForm.length !== 0) {
        const interestsCreate = await axios.post(`http://localhost:5000/interests`, { resumeId: resume.data.id, interestsForm }, { withCredentials: true });
      }
      if (profilesForm.length !== 0) {
        const profilesCreate = await axios.post(`http://localhost:5000/profiles`, { resumeId: resume.data.id, profilesForm }, { withCredentials: true });
      }
      if (skillsForm.length !== 0) {
        const skillsCreate = await axios.post(`http://localhost:5000/skills`, { resumeId: resume.data.id, skillsForm }, { withCredentials: true });
      }
      if (recForm.length !== 0) {
        const recCreate = await axios.post(`http://localhost:5000/recommendations`, { resumeId: resume.data.id, recForm }, { withCredentials: true });
      }
      if (languagesForm.length !== 0) {
        const languagesCreate = await axios.post(`http://localhost:5000/languages`, { resumeId: resume.data.id, languagesForm }, { withCredentials: true });
      }

      setCookie(null, 'authToken', regUser.data.jwt.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      initToken({ token: regUser.data.jwt.token })
      initUser({ id: regUser.data.userId, email: userForm.email })
      deleteAll()
      navigate('/profile')


    } catch (e: any) {
      alert(e.message)
      console.warn(e.message)
    }
  }

  const handleOk = async (): Promise<void> => {
    setIsModalVisible(false);
    setTargetTemplate(true);
    try {
      const { data } = await axios.post('http://localhost:5000/pdf', { ...userForm, coursesForm, experiencesForm, interestsForm, profilesForm, skillsForm, recForm, languagesForm, "templateId": modalContent[0] }, { withCredentials: true, responseType: "json" })
    } catch (e: any) {
      alert(e.message)
      console.warn(e.message)
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const openModalQuestion = (templateId: number, templateName: string, templateContent: any) => {
    setIsModalVisible(true);
    setTargetTemplate(false);
    setModalContent([]);
    setModalContent((prev: any[]) => [...prev, templateId, templateName, templateContent]);
  };



  useEffect(() => {
    (async () => {
      const getHT = await getHTML();
      if (getHT) {
        setData((prev: any[]) => {
          return getHT
        })
      }
    })()
  }, [])

  const getHTML = async (): Promise<any | undefined> => {
    try {
      const { data: dataAxios } = await axios.post(`http://localhost:5000/pdf/html`, { ...userForm, coursesForm, experiencesForm, interestsForm, profilesForm, skillsForm, recForm, languagesForm }, { withCredentials: true, responseType: "json" })
      return dataAxios.arr

    } catch (e: any) {
      alert(e.message)
      console.warn(e.message)
    }
  }

  return (
    <>
      <Modal className="modalAntStyle"
        width={"1000px"}
        title={modalContent[1]}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Назад
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Выбрать
          </Button>
        ]}
      >
        <div className="modalDiv">
          <Frame className="iframeModal"
            initialContent={modalContent[2]}
            mountTarget='#mountHere'
          >
          </Frame>
        </div>
      </Modal>
      <div className="PdfGenerator">
      </div>
      <div>
        <ul className="containerTemplate">
          {data.length ? data.map((el: any, index: number) =>
            <li className="wrapTemplate" key={index}>
              <h2>{el.templateName}</h2>
              {modalContent[0] === el.id && targetTemplate ?
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                  className="svg-check-circle svg-check-circle--active" height="1em" width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg> : ``
              }
              <div className="templateContent" onClick={() => {
                openModalQuestion(
                  el.id,
                  el.templateName,
                  el.templateContent,
                );
              }}>
                <Frame className="iframeContent"
                  initialContent={el.templateContent}
                  mountTarget='#mountHere'
                >
                </Frame>
              </div>
            </li>) : null}
        </ul>
        <div className="PdfGenerator">
          <Button onClick={getAndDownloadPdf} type="primary" danger>Скачать PDF</Button>
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Назад
          </Button>
        </div>
      </div>
    </>
  )
}