import EducationForm from '../EducationForm';
import InterestsForm from '../InterestsForm';
import JobForm from '../JobForm';
import ProfileForm from '../ProfileForm';
import RecommendationsForm from '../RecommendationsForm';
import SkillsForm from '../SkillsForm';
import LanguagesForm from '../LanguagesForm';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.css'
import { FC, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { nanoid } from 'nanoid'
import { useAction } from '../../hooks/useAction';
import React from 'react';
interface props {
  next: any
  prev: any
}

const AllForm: FC<props> = ({ next, prev }) => {
  const {
    deleteCoursesForm,
    deleteInterestsForm,
    deleteExperiencesForm,
    deleteRecForm,
    deleteSkillsForm,
    deleteProfilesForm,
    deleteLanguagesForm
  } = useAction()

  const {
    interestsForm,
    coursesForm,
    experiencesForm,
    recForm,
    skillsForm,
    profilesForm,
    languagesForm
  } = useTypedSelector(state => state.forms.allForms)
  const [iForm, iFormSet] = useState(interestsForm.length === 0 ? [{
    id: nanoid(),
    nanoid: '', hobby: ''
  }] : interestsForm)

  const [edForm, edFormState] = useState(coursesForm.length === 0 ? [{
    id: nanoid(),
    nanoid: '',
    degree: '',
    city: '',
    institution: '',
    dateBegin: '',
    dateFinish: '',
    description: ''
  }] : coursesForm)

  const [jobForm, jobFormState] = useState(experiencesForm.length === 0 ? [{
    id: nanoid(),
    nanoid: '',
    position: '',
    city: '',
    employer: '',
    dateBegin: '',
    dateFinish: '',
    description: ''
  }] : experiencesForm)

  const [recomForm, recomFormState] = useState(recForm.length === 0 ? [{
    id: nanoid(),
    nanoid: '',
    namecompany: '',
    contactperson: '',
    number: '',
    email: ''
  }] : recForm)

  const [skillForm, skillFormState] = useState(skillsForm.length === 0 ? [{
    id: nanoid(),
    nanoid: '',
    skill: '',
    level: 0
  }] : skillsForm)

  const [profileForm, profileFormState] = useState(profilesForm.length === 0 ? [{
    id: nanoid(),
    nanoid: '',
    description: ''
  }] : profilesForm)

  const [languageForm, languageFormState] = useState(languagesForm.length === 0 ? [{
    id: nanoid(),
    nanoid: '',
    language: '',
    level: ''
  }] : languagesForm)

  const addInterests = () => {
    iFormSet(pre => [...pre, {
      id: nanoid(),
      nanoid: '',
      hobby: ''
    }])
  }

  const addCourses = () => {
    edFormState(pre => [...pre, {
      id: nanoid(),
      nanoid: '',
      degree: '',
      city: '',
      institution: '',
      dateBegin: '',
      dateFinish: '',
      description: ''
    }])
  }

  const addJobs = () => {
    jobFormState(pre => [...pre, {
      id: nanoid(),
      nanoid: '',
      position: '',
      city: '',
      employer: '',
      dateBegin: '',
      dateFinish: '',
      description: ''
    }])
  }

  const addRec = () => {
    recomFormState(pre => [...pre, {
      id: nanoid(),
      nanoid: '',
      namecompany: '',
      contactperson: '',
      number: '',
      email: ''
    }])
  }

  const addSkills = () => {
    skillFormState(pre => [...pre, {
      id: nanoid(),
      nanoid: '',
      skill: '',
      level: 0
    }])
  }

  const addProfiles = () => {
    profileFormState(pre => [...pre, {
      id: nanoid(),
      nanoid: '',
      description: '',
    }])
  }

  const addLanguages = () => {
    languageFormState(pre => [...pre, {
      id: nanoid(),
      nanoid: '',
      language: '',
      level: '',
    }])
  }

  const deleteCourses = async (props: any) => {
    deleteCoursesForm(props.nanoid);
    edFormState(pre => [...pre].filter((el) => el.id !== props.id))
    if (edForm.length === 1) {
      addCourses()
    }
  };


  const deleteInterests = async (props: any) => {
    deleteInterestsForm(props.nanoid);
    iFormSet(pre => [...pre].filter((el) => el.id !== props.id))
    if (iForm.length === 1) {
      addInterests()
    }
  };

  const deleteJobs = async (props: any) => {
    deleteExperiencesForm(props.nanoid);
    jobFormState(pre => [...pre].filter((el) => el.id !== props.id))
    if (jobForm.length === 1) {
      addJobs()
    }
  };

  const deleteRec = async (props: any) => {
    deleteRecForm(props.nanoid);
    recomFormState(pre => [...pre].filter((el) => el.id !== props.id))
    if (recomForm.length === 1) {
      addRec()
    }
  };

  const deleteSkills = async (props: any) => {
    deleteSkillsForm(props.nanoid);
    skillFormState(pre => [...pre].filter((el) => el.id !== props.id))
    if (skillForm.length === 1) {
      addSkills()
    }
  }

  const deleteProfiles = async (props: any) => {
    deleteProfilesForm(props.nanoid);
    profileFormState(pre => [...pre].filter((el) => el.id !== props.id))
    if (profileForm.length === 1) {
      addProfiles()
    }
  }

  const deleteLanguages = async (props: any) => {
    deleteLanguagesForm(props.nanoid);
    languageFormState(pre => [...pre].filter((el) => el.id !== props.id))
    if (languageForm.length === 1) {
      addLanguages()
    }
  };

  return (
    <>
      <div
        id='allForms'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      >
        {edForm.map((el) => {
          //@ts-ignore
          return <EducationForm deleteCourses={deleteCourses} key={el.id} {...el} />
        })}
        <Button id='addBtn' type="dashed" onClick={() => addCourses()} icon={<PlusOutlined />}>
          Добавить еще
        </Button>
        <br />
        {iForm.map((el) => {
          return <InterestsForm deleteInterests={deleteInterests} key={el.id} {...el} />
        })}
        <Button id='addBtn' type="dashed" onClick={() => addInterests()} icon={<PlusOutlined />}>
          Добавить еще
        </Button>
        <br />
        {jobForm.map((el) => {
          //@ts-ignore
          return <JobForm deleteJobs={deleteJobs} key={el.id} {...el} />
        })}
        <Button id='addBtn' type="dashed" onClick={() => addJobs()} icon={<PlusOutlined />}>
          Добавить еще
        </Button>
        <br />
        {recomForm.map((el) => {
          //@ts-ignore
          return <RecommendationsForm deleteRec={deleteRec} key={el.id} {...el} />
        })}
        <Button id='addBtn' type="dashed" onClick={() => addRec()} icon={<PlusOutlined />}>
          Добавить еще
        </Button>
        <br />
        {skillForm.map((el) => {
          //@ts-ignore
          return <SkillsForm deleteSkills={deleteSkills} key={el.id} {...el} />
        })}
        <Button id='addBtn' type="dashed" onClick={() => addSkills()} icon={<PlusOutlined />}>
          Добавить еще
        </Button>
        <br />
        {profileForm.map((el) => {
          return <ProfileForm deleteProfiles={deleteProfiles} key={el.id} {...el} />
        })}
        <br />
        {languageForm.map((el) => {
          //@ts-ignore
          return <LanguagesForm deleteLanguages={deleteLanguages} key={el.id} {...el} />
        })}
        <Button id='addBtn' type="dashed" onClick={() => addLanguages()} icon={<PlusOutlined />}>
          Добавить еще
        </Button>
      </div>
      <br />
      <br />
      <Button htmlType='button' onClick={
        (e) => {
          e.preventDefault()
          next()
        }
      }> Следующий шаг</Button>

      <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
        Назад
      </Button>
    </>

  )
}

export default AllForm