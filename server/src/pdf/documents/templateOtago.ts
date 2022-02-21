import { CreateDataDto } from '../dto/create-data.dto';
export default (CreateDataDto) => {
  const today = new Date();
  return `<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <!-- fonts -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet">
    <!-- ./fonts -->

    <style type="text/css">
        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }

        html {
            height: 100%
        }

        body {
            width: 21cm;
            height: 100%;
            min-height: 29.7cm;
            position: relative;
            margin: 0;
            padding: 0 0;
            color: #333;
            line-height: 22px;
            font: 13px "Helvetica", Arial;
            font-style: normal
        }

        h1 {
            font: 32px "Helvetica", Arial;
            margin: 0 0 15px 0;
            padding: 18px 0 5px 0;
            font-weight: 600;
            color: #333;
            letter-spacing: .1em;
            text-align: left;
            text-transform: uppercase
        }

        h1 span {
            padding: 0 20px 10px 0
        }

        h1 span.has--avatar {
            padding-left: 50px
        }

        h2 {
            font: 18px "Source Sans Pro", Arial;
            font-weight: 700;
            margin: 0;
            text-transform: uppercase;
            padding: 0;
            text-align: left;
            letter-spacing: .15em;
            background: #fff
        }

        h3 {
            font-size: 13px;
            font-weight: 600;
            margin: 0;
            padding: 0
        }

        p {
            color: #4c4c4c;
            line-height: 18px;
            font-weight: 400;
            margin: 0;
            padding: 0
        }

        hr {
            border: none;
            height: 1px;
            width: 100%;
            padding: 0;
            margin: 0;
            background: #d2d2d2
        }

        .circle {
            display: none;
            position: fixed;
            top: 950px;
            right: -150px;
            height: 300px;
            width: 300px;
            opacity: .2;
            border-radius: 50%;
            background-color: #f4d92c
        }

        .hero {
            left: 0;
            top: 0;
            width: 100%;
            height: 85px;
            position: absolute
        }

        .sections {
            left: 40px;
            position: relative;
            width: 715px
        }

        .section {
            position: relative;
            width: 100%;
            padding: 0
        }

        .section p {
            display: block;
            font-style: normal
        }

        .section:last-child {
            border: none
        }

        .section.section--summary {
            margin-top: 0;
            width: 100%;
            text-align: left;
            padding-bottom: 0;
            padding-top: 15px;
            margin-top: 17px;
            border-top: 1px solid #b7b7b7
        }

        .section.section--summary .section--content {
            padding-left: 0;
            width: 100%
        }

        .section.section--hobbies .section--content {
            padding-top: 0
        }

        .section.section--characteristics .section--content {
            padding-top: 0
        }

        .section--name {
            position: relative;
            text-align: left
        }

        .section--name.has--avatar {
            padding-left: 70px;
            padding-bottom: 5px
        }

        .section--name__sub {
            display: block;
            margin-top: -10px;
            padding: 0;
            line-height: 24px
        }

        .section--name__sub svg {
            top: 2px;
            position: relative;
            height: 13px;
            width: 13px
        }

        .section--name__sub svg.svg--phone {
            margin-left: 8px
        }

        .section--name__sub svg.svg--email {
            margin-left: 10px
        }

        .section__label {
            display: inline-block;
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px 0 0 0;
            margin: 0;
            height: 65px;
            width: 70px;
            color: #fff;
            font-size: 36px;
            font-weight: 700;
            text-align: center;
            border-width: 0 3px 3px 0;
            background-color: #f4d92c;
            -webkit-background-size: cover !important;
            background-size: cover !important
        }

        .section--name__avatar {
            display: inline-block;
            position: absolute;
            top: 20px;
            left: 0;
            padding: 10px 0 0 0;
            margin: 0;
            height: 35px;
            width: 35px;
            border-radius: 50%;
            -webkit-background-size: cover !important;
            background-size: cover !important
        }

        .personalia__list {
            float: left;
            display: inline;
            position: relative;
            width: 100%;
            margin: 0;
            padding: 0
        }

        .personalia__item {
            float: left;
            display: inline;
            position: relative;
            margin: 0;
            padding: 5px 0 0 0;
            width: 175px
        }

        .section__personalia {
            display: inline-block;
            margin-top: 0;
            height: auto;
            width: 715px;
            margin: 15px 0 0 0;
            padding: 15px 0 0 0;
            text-align: left;
            border-top: 1px solid #b7b7b7
        }

        .section__personalia .section__personalia-item {
            display: inline;
            float: left;
            width: 175px
        }

        .section__personalia span {
            position: relative;
            display: inline-block;
            margin-right: 10px;
            padding-left: 20px
        }

        .section__personalia span :last-child {
            margin-right: 0
        }

        .section__personalia svg {
            display: none;
            position: absolute;
            top: 1px;
            left: 0;
            margin-right: 2px;
            height: 14px;
            width: 14px
        }

        .section__personalia .section__personalia--address svg {
            top: 1px
        }

        .section__personalia .section__personalia--phoneNumber svg {
            top: 1px
        }

        .section__personalia .section__personalia--email svg {
            top: 1px
        }

        .section--title {
            display: block;
            position: relative;
            z-index: 99;
            margin: 17px 0 0 0;
            padding: 15px 0 8px 0;
            page-break-inside: avoid;
            border-top: 1px solid #b7b7b7
        }

        .section--title span {
            display: none;
            display: inline-block;
            margin-right: 0
        }

        .section--title .section--title-label {
            display: inline-block;
            height: 20px;
            width: 20px;
            position: absolute;
            left: -40px;
            bottom: 10px;
            display: none;
            background-color: #4c4c4c
        }

        .section--title-icon {
            position: relative;
            top: 2px;
            left: 0;
            display: inline-block;
            width: 30px
        }

        .section--title-icon svg {
            display: none;
            position: relative;
            top: 2px;
            height: 21px;
            fill: #2b2b38
        }

        .section--title-icon.personal svg {
            top: 3px
        }

        .section--title-icon.education svg {
            top: 4px
        }

        .section--title-icon.internships svg {
            top: 3px
        }

        .section--title-icon.language svg {
            top: 4px
        }

        .section--title-icon.course svg {
            top: 4px
        }

        .section--title-icon.work svg {
            top: 3px
        }

        .section--title-icon.certificate svg {
            top: 4px
        }

        .section--title-icon.single-textarea svg {
            top: 4px
        }

        .section--title-icon.extra-curricular svg {
            top: 3px
        }

        .section--title-icon.skill svg {
            top: 4px
        }

        .section--title-icon.reference svg {
            top: 4px
        }

        .section--heading-group {
            display: block;
            padding: 10px 0 0 0;
            margin: 0;
            page-break-inside: avoid
        }

        .section--list {
            display: block;
            list-style: none;
            padding: 0;
            margin: 0
        }

        .section--item {
            display: block;
            position: relative;
            list-style: none;
            padding: 0;
            margin: 0
        }

        .section--item.skills {
            padding-top: 5px
        }

        .section--item.skills:first-child {
            padding-top: 0
        }

        .section--item.section--item-personal {
            padding-left: 140px
        }

        .section--item.section--item-personal .section--date {
            top: 13px;
            left: 0;
            right: auto;
            text-align: left
        }

        .section--item:first-child .section--heading-group {
            padding-top: 0
        }

        .section--item:first-child .section--heading-group .section--date {
            top: 0
        }

        .skills--label {
            display: inline-block;
            width: 175px;
            margin: 0
        }

        .section--date {
            position: absolute;
            right: 0;
            text-align: right;
            top: 10px;
            width: 145px;
            font-size: 13px;
            padding: 0;
            margin: 0
        }

        .section--heading {
            display: block;
            padding: 0;
            margin: 0
        }

        .section--sub-heading {
            display: block;
            padding: 3px 0 0 0;
            margin: 0;
            font-size: 13px
        }

        .section--content {
            display: block;
            width: 600px;
            padding: 5px 0 0 0;
            margin: 0
        }

        .section--content p {
            display: block
        }

        .section--content ol, .section--content ul {
            white-space: normal;
            font-weight: 400;
            list-style-position: outside;
            color: #4c4c4c;
            margin: 0;
            padding: 0 0 0 16px
        }

        .section--content ol li, .section--content ul li {
            line-height: 18px
        }

        .section--content ul li {
            list-style-type: disc
        }

        .section--content ol {
            padding-left: 14px
        }

        .section--content-single-textarea {
            padding-left: 0
        }

        .skills__list {
            position: relative;
            display: inline-block;
            list-style: none;
            margin: 0;
            padding: 0;
            top: 2px
        }

        .skills__item {
            display: inline-block;
            height: 10px;
            width: 10px;
            padding: 5px 0 0 0;
            margin: 0 3px 0 0;
            border-radius: 50%;
            border: 1px solid #b7b7b7
        }

        .skills__item.active {
            background: #333;
            border-color: #333
        }

        .c--ababab .section__label {
            background: #ababab !important
        }

        .c--f4d92c .section__label {
            background: #f4d92c !important
        }

        .c--2196f3 .section__label {
            background: #2196f3 !important
        }

        .c--8bc34a .section__label {
            background: #8bc34a !important
        }

        .c--b34848 .section__label {
            background: #b34848 !important
        }

    </style>

</head>
<body class="c--ababab" style="overflow: hidden !important;">

<div class="circle"></div>


<div class="hero"></div>

<section class="sections">

    <div class="section__label">
        CV
    </div>

    <div class="section--name">
        <h1>


            
                 
                 ${
                   CreateDataDto.photo
                     ? `<div class="section--name__avatar"
                 style="background:url('http://localhost:5000/users/image/${CreateDataDto.photo}') no-repeat;"></div>`
                     : `<div class="section--name__avatar"
                 style="background:url('http://localhost:5000/users/image/asd.png') no-repeat;"></div>`
                 }

            <span class="has--avatar"> ${CreateDataDto.firstName} ${
    CreateDataDto.lastName
  }   </span>
        </h1>

        <span class="section--name__sub">

            
                ${
                  CreateDataDto.postAdr ||
                  CreateDataDto.city ||
                  CreateDataDto.postIndex
                    ? `<svg class="svg--address" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                   <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                   <path d="M0 0h24v24H0z" fill="none"></path>
               </svg>
                ${
                  CreateDataDto.postAdr ? CreateDataDto.postAdr + ',' : ''
                }                                   ${
                        CreateDataDto.postIndex ? CreateDataDto.postIndex : ''
                      } ${CreateDataDto.city ? CreateDataDto.city : ''}`
                    : ''
                }
                
                ${
                  CreateDataDto.phoneNumber
                    ? `<svg class="svg--phone" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                             xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
           </svg>
            ${CreateDataDto.phoneNumber}`
                    : ''
                }
            
           <svg class="svg--email" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                xmlns="http://www.w3.org/2000/svg">
               <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
               <path d="M0 0h24v24H0z" fill="none"></path>
           </svg>
            ${CreateDataDto.email}
        </span>

    </div>


    <div class="section__personalia">

        <ul class="personalia__list">


            ${
              CreateDataDto.birthDate
                ? `<li class="personalia__item">
                <b>Дата рождения</b>
                <br>
                ${CreateDataDto.birthDate}
            </li>`
                : ''
            }


            

            ${
              CreateDataDto.placeOfBirth
                ? `<li class="personalia__item">
                <b>Гражданство</b>
                <br>
                ${CreateDataDto.placeOfBirth}
            </li>`
                : ''
            }

            

            ${
              CreateDataDto.sex
                ? `<li class="personalia__item">
                <b>Пол</b>
                <br>
                ${CreateDataDto.sex}
            </li>`
                : ''
            }


            

            ${
              CreateDataDto.website
                ? `<li class="personalia__item">
                <b>Веб-сайт</b>
                <br>
                ${CreateDataDto.website}
            </li>`
                : ''
            }

            
            ${
              CreateDataDto.placeOfBirth
                ? `<li class="personalia__item">
                <b>Место рождения</b>
                <br>
                ${CreateDataDto.placeOfBirth}
            </li>`
                : ''
            }


            

            ${
              CreateDataDto.familyStatus
                ? `<li class="personalia__item">
                <b>Семейное положение</b>
                <br>
                ${CreateDataDto.familyStatus}
            </li>`
                : ''
            }

            

            ${
              CreateDataDto.linkedIn
                ? `<li class="personalia__item">
                <b>LinkedIn</b>
                <br>
                ${CreateDataDto.linkedIn}
            </li>`
                : ''
            }

        </ul>

    </div>


    ${
      CreateDataDto.profilesForm.length !== 0
        ? `<div class="section section--summary">
        <div class="section--content">
            <p>${CreateDataDto.profilesForm[0].description}</p>
        </div>
    </div>`
        : ''
    }


    

    ${
      CreateDataDto.experiencesForm.length !== 0
        ? `<div class="section">

        <div class="section--title">
            <h2>
                <span class="section--title-label"></span>

                Опыт работы
            </h2>
        </div>


        <ol class="section--list">
        ${CreateDataDto.experiencesForm
          .map((el) => {
            return `<li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">${
                      el.dateBegin ? el.dateBegin : ''
                    } - ${el.dateFinish ? el.dateFinish : 'по Н.В.'}</div>
                    
                    ${
                      el.position
                        ? `<div class="section--heading">
                        <h3>${el.position}</h3>
                    </div>`
                        : ''
                    }

                    ${
                      el.employer
                        ? `<div class="section--sub-heading">
                        ${el.employer}${el.city ? ', ' + el.city : ''}
                    </div>`
                        : ''
                    }
                    
                </div>
                ${
                  el.description
                    ? `<div class="section--content">
                    <p>${el.description}</p>
                </div>`
                    : ''
                }
            </li>`;
          })
          .join('')}
        </ol>
    </div>`
        : ''
    }

    ${
      CreateDataDto.coursesForm.length !== 0
        ? `<div class="section">

        <div class="section--title">
            <h2>
                <span class="section--title-label"></span>

                Образование и квалификации
            </h2>
        </div>

        <ol class="section--list">

        ${CreateDataDto.coursesForm
          .map((el) => {
            return `<li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        ${el.dateBegin ? el.dateBegin : 'X'} - ${
              el.dateFinish ? el.dateFinish : 'по Н.В.'
            }
                    </div>
                    ${
                      el.degree
                        ? `<div class="section--heading">
                        <h3>${el.degree}</h3>
                    </div>`
                        : ''
                    }
                    
                    ${
                      el.institution
                        ? `<div class="section--sub-heading">
                        ${el.institution}${el.city ? ', ' + el.city : ''}
                    </div>`
                        : ''
                    }
                
                </div>
                ${
                  el.description
                    ? `<div class="section--content">
                    <p>${el.description}</p>
                </div>`
                    : ''
                }
            </li>`;
          })
          .join('')}
        </ol>

    </div>`
        : ''
    }


    ${
      CreateDataDto.interestsForm.length !== 0
        ? `
    <div class="section section--hobbies">

        <div class="section--title">
            <h2>
                <span class="section--title-label"></span>
                Интересы
            </h2>
        </div>

        <ol class="section--list">
        ${CreateDataDto.interestsForm
          .map((el) => {
            return `<li class="section--item">
                <div class="section--content">
                    <p>${el.hobby ? el.hobby : ``}</p>
                </div>
            </li>`;
          })
          .join('')}
        </ol>
    </div>
    `
        : ''
    }

    

    ${
      CreateDataDto.recForm.length !== 0
        ? `
        <div class="section">

        <div class="section--title">
            <h2>
                <span class="section--title-label"></span>

                Рекомендации
            </h2>
        </div>
        <div class="section--content section--content-single-textarea">
        <p>${CreateDataDto.recForm
          .map((el) => {
            return `
        <p>${el.namecompany ? el.namecompany + ',' : ''} ${
              el.contactperson ? el.contactperson : ''
            }</p>
        <p>${el.number ? el.number + ',' : ''} ${el.email ? el.email : ''}</p>
        `;
          })
          .join('')}</p>
    </div>

</div>


`
        : ``
    }
          
   
    ${
      CreateDataDto.skillsForm.length !== 0
        ? `
        <div class="section">

        <div class="section--title">
            <h2>
                <span class="section--title-label"></span>

                Навыки
            </h2>
        </div>


        <ol class="section--list skills">
        ${CreateDataDto.skillsForm
          .map((el) => {
            return `
            <li class="section--item skills">
        <div class="skills--label">
            <h3>
            ${el.skill ? el.skill : ''}
            </h3>
        </div>
            ${
              el.level === '1'
                ? ` <div class="skills--label">Очень плохо</div>`
                : ``
            }
            ${el.level === '2' ? ` <div class="skills--label">плохо</div>` : ``}
            ${
              el.level === '3' ? ` <div class="skills--label">средне</div>` : ``
            }
            ${
              el.level === '4' ? ` <div class="skills--label">хорошо</div>` : ``
            }
            ${
              el.level === '5'
                ? ` <div class="skills--label">Очень хорошо</div>`
                : ``
            }
    </li>
    `;
          })
          .join('')}
        
    </ol>

    </div>
`
        : ``
    }
   
    ${
      CreateDataDto.languagesForm.length !== 0
        ? `
        <div class="section">

        <div class="section--title">
            <h2>
                <span class="section--title-label"></span>

                Языки
            </h2>
        </div>
        <ol class="section--list skills">

        ${CreateDataDto.languagesForm
          .map((el) => {
            return `
            <li class="section--item skills">
            <div class="skills--label">
                <h3>${el.language ? el.language : ''}
                </h3>
            </div>
           
            ${
              el.level === 'Начальный'
                ? `
                <div class="skills--label">Начальный</div>
            `
                : ``
            }
            ${
              el.level === 'Ниже среднего'
                ? `
                <div class="skills--label">Ниже среднего</div>
            `
                : ``
            }
            ${
              el.level === 'Средний'
                ? `
                <div class="skills--label">Средний</div>
            `
                : ``
            }
            ${
              el.level === 'Выше среднего'
                ? `
                <div class="skills--label">Выше среднего</div>
            `
                : ``
            }
            ${
              el.level === 'Продвинутый'
                ? `
                <div class="skills--label">Продвинутый</div>
            `
                : ``
            } 
              ${
                el.level === 'Профессиональный'
                  ? `
                  <div class="skills--label">Профессиональный</div>
              `
                  : ``
              } 
        </li>
        `;
          })
          .join('')}
            </ol>
    </div>
        `
        : ``
    }  
    


        
          

        
</section>

<div id="mountHere"></div>
</body>
</html>`;
};
