// import * as actions from "../../store/actions/posts";
// import { useDispatch, useSelector } from "react-redux";
// import { Card } from "antd";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@material-ui/icons/Delete";
import GetAppIcon from "@material-ui/icons/GetApp";
import UpdateIcon from "@material-ui/icons/Update";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import { grey } from "@material-ui/core/colors";
import { useAction } from '../../hooks/useAction';
import { nanoid } from "nanoid";
import Frame from 'react-frame-component';
import './index.css'


import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import axios from "axios";
import { useNavigate } from "react-router";
import saveAs from "file-saver";
interface ProfileListProps {
  resume: any,
  setResumes: any
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 700,
      margin: 20,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    media: {
      height: 500,
    },
    button: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    img: {
      overflowY: "auto",
      height: 550,
    },
  })
);

const ResumeCard: FC<ProfileListProps> = ({ resume, setResumes }) => {
  const { userForm } = useTypedSelector(state => state.forms)
  const { editResume, addCoursesForm, addExperiencesForm, addInterestsForm, addLanguagesForm, addProfilesForm, addRecForm, addSkillsForm } = useAction()
  const classes = useStyles();
  const [template, setTemplate] = useState<any>('')
  const [resumeData, setResumeData] = useState({
    allContentCourses: [],
    allContentExperiences: [],
    allContentInterests: [],
    allContentProfiles: [],
    allContentSkills: [],
    allContentRecommendations: [],
    allContentLanguages: [],
    resumeId: 0,
    templateId: resume.templateId
  })
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:5000/resumes/${resume.id}`, { withCredentials: true })
      console.log(response, "RESPONSE NA GET RESUMES");
      setResumeData(response.data)
      console.log(resumeData, 'RESUME DATA POSLE RESPONSA');
    })()
  }, [userForm])

  useEffect(() => {
    (async () => {
      const getHT = await getHTML(resumeData);
      if (getHT) {
        setTemplate(getHT)
      }
    })()
  }, [resumeData])

  const getHTML = async (tempData: any): Promise<any | undefined> => {
    console.log(tempData);

    try {
      const { data: resp } = await axios.post(`http://localhost:5000/pdf/htmlGetOneGenerate`, {
        ...userForm,
        templateId: tempData.templateId,
        coursesForm: tempData.allContentCourses,
        experiencesForm: tempData.allContentExperiences,
        interestsForm: tempData.allContentInterests,
        profilesForm: tempData.allContentProfiles,
        skillsForm: tempData.allContentSkills,
        recForm: tempData.allContentRecommendations,
        languagesForm: tempData.allContentLanguages
      }, { withCredentials: true, responseType: "json" })

      return resp.lubaya

    } catch (e: any) {
      alert(e.message)
      console.warn(e.message)
    }
  }

  const onClickToChangeBut = () => {
    editResume(resume.id);
    if (resumeData.allContentCourses.length) {
      resumeData.allContentCourses.forEach((el: any) => {
        el.nanoid = nanoid()
        el.id = nanoid()
        addCoursesForm(el)
      })
    }
    if (resumeData.allContentExperiences.length) {
      resumeData.allContentExperiences.forEach((el: any) => {
        el.nanoid = nanoid()
        el.id = nanoid()
        addExperiencesForm(el)
      })
    }
    if (resumeData.allContentInterests.length) {
      resumeData.allContentInterests.forEach((el: any) => {
        el.nanoid = nanoid()
        el.id = nanoid()
        addInterestsForm(el)
      })
    }
    if (resumeData.allContentProfiles.length) {
      resumeData.allContentProfiles.forEach((el: any) => {
        el.nanoid = nanoid()
        el.id = nanoid()
        addProfilesForm(el)
      })
    }
    if (resumeData.allContentSkills.length) {
      resumeData.allContentSkills.forEach((el: any) => {
        el.nanoid = nanoid()
        el.id = nanoid()
        addSkillsForm(el)
      })
    }
    if (resumeData.allContentRecommendations.length) {
      resumeData.allContentRecommendations.forEach((el: any) => {
        el.nanoid = nanoid()
        el.id = nanoid()
        addRecForm(el)
      })
    }
    if (resumeData.allContentLanguages.length) {
      resumeData.allContentLanguages.forEach((el: any) => {
        el.nanoid = nanoid()
        el.id = nanoid()
        addLanguagesForm(el)
      })
    }
    navigate('/form')
  }


  const onClickDownloadBut = async (data: any) => {
    const response = await axios.post('http://localhost:5000/pdf', {
      ...userForm,
      "templateId": data.templateId,
      coursesForm: data.allContentCourses,
      experiencesForm: data.allContentExperiences,
      interestsForm: data.allContentInterests,
      profilesForm: data.allContentProfiles,
      skillsForm: data.allContentSkills,
      recForm: data.allContentRecommendations,
      languagesForm: data.allContentLanguages
    }, { withCredentials: true, responseType: "json" })
    const res = await axios.get(`http://localhost:5000/pdf/${userForm.email}-${data.templateId}`, { responseType: 'blob' })
    const pdfBlob = await new Blob([res.data], { type: 'application/pdf' });
    await saveAs(pdfBlob, `CV-${data.templateId}.pdf`);
  }



  const onClickDeleteBut = async (data: any) => {
    const res = await axios.delete(`http://localhost:5000/resumes/${resumeData.resumeId}`)
    setResumes((prev: any) => prev.filter((el: any) => el.id !== resumeData.resumeId))
  }

  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.session.isAuthorized);

  // const deleteHandler = () => {
  //   dispatch(actions.deletePost(id));
  // };
  //
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item md={12}>
            <Paper className={classes.paper}>
              <Typography gutterBottom variant="h5" component="h2">
                {resume.title}#{resume.id}
              </Typography>
              <div className="wrapTemplate-2">
                {template ? <Frame className="iframeContent-2"
                  initialContent={template}
                  mountTarget='#mountHere'
                ></Frame> : ''}

              </div>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* {user.template.title} */}
              </Typography>
              <div className={classes.button}>
                <ButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                >
                  <Button
                    startIcon={
                      <GetAppIcon
                        fontSize="small"
                        style={{ color: green[500] }}
                      />
                    }
                    onClick={() => onClickDownloadBut(resumeData)}
                  >
                    скачать
                  </Button>
                  <Button
                    startIcon={
                      <UpdateIcon
                        fontSize="small"
                        style={{ color: grey[700] }}
                      />
                    }
                    onClick={onClickToChangeBut}
                  >
                    редактировать
                  </Button>
                  <Button
                    startIcon={
                      <DeleteIcon
                        fontSize="small"
                        style={{ color: red[500] }}
                      />
                    }
                    onClick={onClickDeleteBut}
                  >
                    удалить
                  </Button>
                </ButtonGroup>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default ResumeCard;