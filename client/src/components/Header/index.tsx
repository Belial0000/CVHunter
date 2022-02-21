import Button from '@material-ui/core/Button'
import { FC } from "react"
import { Outlet, useNavigate } from 'react-router'
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './index.css'
import { destroyCookie } from 'nookies';

const fontForButton = {
  fontSize: '15px',
  fontWeight: 300,
  color: "white"
}

export const Header: FC = () => {

  const { deleteAll, deleteUser, deleteResumes } = useAction()
  const navigate = useNavigate()
  const { token } = useTypedSelector(state => state.user)

  const logout = () => {
    deleteAll()
    deleteUser()
    deleteResumes()
    destroyCookie(null, 'authToken')
    navigate('/')
  }

  return (
    <>
      <header>
        <div className='Logo' onClick={() => navigate('/')}>
          <img src="/icons8-cv-96.png" alt="cv" width="28px" height="28px" />
          <div className="Logo-Name">CVHUNTER</div>
        </div>
        <div className='Nav'>
          {token ?
            <>
              <Button variant="text" style={fontForButton} onClick={() => navigate('/')}>Главная</Button>
              <Button variant="text" style={fontForButton} onClick={() => navigate('/form')}>Создать резюме</Button>
              <Button variant="text" style={fontForButton} onClick={() => navigate('/profile')}>Мои резюме</Button>
              <Button variant="text" style={fontForButton} onClick={() => navigate('/letter')}>Связаться с нами</Button>
              <Button variant="text" style={fontForButton} onClick={logout}>Выйти</Button>
            </> :
            <>
              <Button variant="text" style={fontForButton} onClick={() => navigate('/')}>Главная</Button>
              <Button variant="text" style={fontForButton} onClick={() => navigate('/form')}>Создать резюме</Button>
              <Button variant="text" style={fontForButton} onClick={() => navigate('/letter')}>Связаться с нами</Button>
              <Button variant="text" style={fontForButton} onClick={() => navigate('/auth')}>Войти</Button>
            </>
          }
        </div>
      </header>
      <Outlet />
    </>
  )
}