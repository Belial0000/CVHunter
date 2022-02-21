import { FC } from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button'



import './index.css'
import { LandingCard } from "../LandingCard";
import { useNavigate } from "react-router";

const MainTitle = styled.h2`
  font-weight: 500;
  font-size: 54px;
  color: white;
  margin-bottom: 10px;
`

const SecondaryTitle = styled.h2`
  font-weight: 200;
  font-size: 30px;
  color: white
`

const CardHolder = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
margin-top: 35px;
`

const ContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 130px
`

const priceCard = styled.div`

`

const styleForImg = {
  margin: "10px",
  borderRadius: "7px",
  boxShadow: "0px 0px 30px 9px rgba(0, 0, 0, 0.25)",
}

export const Landing: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <MainTitle >Создайте профессиональное резюме у нас</MainTitle>
        <SecondaryTitle>У Вас будет на 65% больше шансов<br />
          получить работу</SecondaryTitle>
      </div>
      {/* <MainButton href={'/form'} content="Заказать Резюме" /> */}
      <Button variant='contained' style={{
        color: 'white',
        backgroundColor: '#DB0000',
        width: "200px", height: "50px",
        borderRadius: '7px',
        boxShadow: "4px 7px 4px rgba(0, 0, 0, 0.25)",
        fontSize: "15px",
        fontWeight: "500",
        marginTop: "20px",
      }} onClick={() => navigate('/form')}>Заказать Резюме</Button>
      <ContentContainer>
        <MainTitle>С нами:</MainTitle>
        <CardHolder>
          <LandingCard
            title="Быстро и легко"
            content="
          С нашим онлайн-конструктором резюме, любой человек может быстро создать профессиональное резюме.
          Введите свои личные данные и начните заполнять резюме.
          Наконец, выберите один из предложенных шаблонов и загрузите Ваше резюме.
          "
            iconLink="/icons8-speed-100.png" />
          <LandingCard
            title="Больше шансов получить работу"
            content="
          Профессиональное резюме выделит Вас среди всех других претендентов.
          Вероятность того, что Вас приглясят на собеседование, также повысится на 65%.
          "
            iconLink="/icons8-feather-100.png" />
          <LandingCard
            title="Удобно"
            content="
            Часто, важно иметь возможность адаптировать своё резюме в зависимости от вакансии, 
            на котороую Вы хотите подать заявку. CVHunter позволяет создавать и редактировать
            сразу несколько резюме, которые упорядоченно хранятся в Вашем личном кабинете.
          "
            iconLink="/icons8-hand-cursor-96.png"
          />
        </CardHolder>
      </ContentContainer>
      <ContentContainer>
        <MainTitle>Выбери своё резюме</MainTitle>
        <CardHolder>
          <div className='templateCard'>
            <img src="/resume1.png" alt="resume" width="100%" style={styleForImg} onClick={() => navigate('/form')}></img>
          </div>
          <div className='templateCard'>
            <img src="/resume2.png" alt="resume" width="100%" style={styleForImg} onClick={() => navigate('/form')}></img>
          </div>
          <div className='templateCard'>
            <img src="/resume3.png" alt="resume" width="100%" style={styleForImg} onClick={() => navigate('/form')}></img>
          </div>
          <div className='templateCard'>
            <img src="/resume4.png" alt="resume" width="100%" style={styleForImg} onClick={() => navigate('/form')}></img>
          </div>
          <div className='templateCard'>
            <img src="/resume5.png" alt="resume" width="100%" style={styleForImg} onClick={() => navigate('/form')}></img>
          </div>
          <div className='templateCard'>
            <img src="/resume6.png" alt="resume" width="100%" style={styleForImg} onClick={() => navigate('/form')}></img>
          </div>
          <div className='templateCard'>
            <img src="/resume7.png" alt="resume" width="100%" style={styleForImg} onClick={() => navigate('/form')}></img>
          </div>
          <div className='templateCard'>
            <img src="/resume8.png" alt="resume" width="100%" style={styleForImg} onClick={() => navigate('/form')}></img>
          </div>
          <div className='templateCard'>
            <img src="/resume9.png" alt="resume" width="100%" style={styleForImg} onClick={() => navigate('/form')}></img>
          </div>
        </CardHolder>
      </ContentContainer>
    </>
  )
}