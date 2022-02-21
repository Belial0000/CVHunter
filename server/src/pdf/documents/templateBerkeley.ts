import { CreateDataDto } from '../dto/create-data.dto';

export default (CreateDataDto) => {
  const today = new Date();
  return `<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <!-- fonts -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet">
    <!-- ./fonts -->


    <!-- css -->
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
            font: 30px "Helvetica", Arial;
            margin: 0;
            margin: 0 0 15px 0;
            padding: 20px 0 0 0;
            font-weight: 600;
            color: #333
        }

        h1 span {
            position: relative;
            font-style: normal;
            display: inline;
            margin-right: 1px;
            padding: 0
        }

        h2 {
            font: 16px "Source Sans Pro", Arial;
            font-weight: 400;
            margin: 0;
            padding: 4px 0 12px 10px;
            background: #f1f1f1
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

        .hero {
            left: 0;
            top: 0;
            width: 100%;
            height: 85px;
            display: none;
            background: #272727;
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

        .section.section--summary .section--content {
            padding-top: 0;
            padding-left: 0
        }

        .section--name {
            position: relative
        }

        .section--name.has--avatar {
            padding-left: 60px;
            padding-bottom: 5px
        }

        .section--avatar {
            display: inline-block;
            position: absolute;
            top: 19px;
            left: 0;
            padding: 0;
            margin: 0;
            height: 45px;
            width: 45px;
            border-radius: 50%;
            -webkit-background-size: cover !important;
            background-size: cover !important
        }

        .section--title {
            display: block;
            position: relative;
            z-index: 99;
            margin: 0;
            padding: 20px 0 15px 0;
            page-break-inside: avoid
        }

        .section--title span {
            display: inline-block;
            margin-right: 0
        }

        .section--title-icon {
            position: relative;
            top: 2px;
            left: 0;
            display: inline-block;
            width: 30px
        }

        .section--title-icon svg {
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
            padding: 5px 0 0 0;
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
            padding: 10px 0 0 0;
            margin: 0
        }

        .section--item.section--item-personal {
            padding-top: 0;
            padding-left: 140px
        }

        .section--item.section--item-personal .section--date {
            top: 5px;
            left: 0;
            right: auto;
            text-align: left
        }

        .section--item:first-child:not(.section--item-personal) {
            padding: 2px 0 0 0
        }

        .section--item:first-child:not(.section--item-personal) .section--heading-group {
            padding-top: 0
        }

        .section--item:first-child:not(.section--item-personal) .section--heading-group .section--date {
            top: 0
        }

        .section--date {
            position: absolute;
            right: 0;
            text-align: right;
            top: 15px;
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
            font-style: italic;
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

        .c--333333 .section--title, .c--333333 h1 {
            color: #333 !important
        }

        .c--333333 .section--title svg {
            fill: #333 !important
        }

        .c--379047 .section--sub-heading, .c--379047 h1, .c--379047 h2 {
            color: #48634c !important
        }

        .c--379047 .section--title svg {
            fill: #48634c !important
        }

        .c--3f6592 .section--title, .c--3f6592 h1 {
            color: #3f6592 !important
        }

        .c--3f6592 .section--title svg {
            fill: #3f6592 !important
        }

        .c--7a345e .section--title, .c--7a345e h1 {
            color: #7a345e !important
        }

        .c--7a345e .section--title svg {
            fill: #7a345e !important
        }

        .c--ac3e49 .section--title, .c--ac3e49 h1 {
            color: #ac3e49 !important
        }

        .c--ac3e49 .section--title svg {
            fill: #ac3e49 !important
        }
    </style>
    <!-- ./css -->


</head>
<body class="c--333333" style="overflow: hidden !important;">
<div class="hero"></div>
<section class="sections">
    <div class="section--name has--avatar">
        
        ${
          CreateDataDto.photo
            ? `<div class="section--avatar"
             style="background: url('http://localhost:5000/users/image/${CreateDataDto.photo}') no-repeat;">
        </div>`
            : `<div class="section--avatar"
             style="background: url('http://localhost:5000/users/image/asd.png') no-repeat;">
        </div>`
        }
        <h1> ${CreateDataDto.firstName}  ${CreateDataDto.lastName}
        </h1>
    </div>
    <div class="section">
        <div class="section--title">
            <h2>
                <i class="section--title-icon personal">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                    </svg>
                </i>
                Личные данные
            </h2>
        </div>
        <ol class="section--list">
            <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Имя
                    </div>
                    <div class="section--heading">
                        <h3> 
                        ${CreateDataDto.firstName}  ${CreateDataDto.lastName}
                        </h3>
                    </div>
                </div>
            </li>
            ${
              CreateDataDto.city ||
              CreateDataDto.postAdr ||
              CreateDataDto.postIndex
                ? `
                <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Адрес
                    </div>
                    <div class="section--heading">
                        <h3>${
                          CreateDataDto.postAdr
                            ? CreateDataDto.postAdr + ','
                            : ``
                        }  
                        ${
                          CreateDataDto.postIndex
                            ? CreateDataDto.postIndex + ','
                            : ``
                        }
                         ${CreateDataDto.city ? CreateDataDto.city : ``}
                        </h3>
                    </div>
                </div>
            </li>`
                : ``
            }
            ${
              CreateDataDto.phoneNumber
                ? `
                <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Номер телефона
                    </div>
                    <div class="section--heading">
                        <h3>${CreateDataDto.phoneNumber}</h3>
                    </div>
                </div>
            </li>
            `
                : ``
            }
            ${
              CreateDataDto.email
                ? `
                <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Email
                    </div>
                    <div class="section--heading">
                        <h3>${CreateDataDto.email}</h3>
                    </div>
                </div>
            </li>`
                : ``
            }
            ${
              CreateDataDto.birthDate
                ? `
                <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Дата рождения
                    </div>
                    <div class="section--heading">
                        <h3> ${CreateDataDto.birthDate}
                        </h3>
                    </div>
                </div>
            </li>`
                : ``
            } 
            ${
              CreateDataDto.placeOfBirth
                ? `
                <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Место рождения
                    </div>
                    <div class="section--heading">
                        <h3> ${CreateDataDto.placeOfBirth}</h3>
                    </div>
                </div>
            </li>`
                : ``
            } 
            ${
              CreateDataDto.sex
                ? `
                <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Пол
                    </div>
                    <div class="section--heading">
                        <h3> ${CreateDataDto.sex}
                        </h3>
                    </div>
                </div>
            </li>`
                : ``
            }
            ${
              CreateDataDto.citizenship
                ? `
                <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Гражданство
                    </div>
                    <div class="section--heading">
                        <h3>${CreateDataDto.citizenship}</h3>
                    </div>
                </div>
            </li>`
                : ``
            } 
            ${
              CreateDataDto.familyStatus
                ? `
                <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Семейное положение
                    </div>
                    <div class="section--heading">
                        <h3> ${CreateDataDto.familyStatus}
                        </h3>
                    </div>
                </div>
            </li>`
                : ``
            }
            ${
              CreateDataDto.website
                ? `
                <li class="section--item section--item-personal">
                <div class="section--heading-group">
                    <div class="section--date">
                        Веб-сайт
                    </div>
                    <div class="section--heading">
                        <h3>${CreateDataDto.website}
                        </h3>
                    </div>
                </div>
            </li>`
                : ``
            } 
            ${
              CreateDataDto.linkedIn
                ? `
            <li class="section--item section--item-personal">
            <div class="section--heading-group">
                <div class="section--date">
                    LinkedIn
                </div>
                <div class="section--heading">
                    <h3>${CreateDataDto.linkedIn}</h3>
                </div>
            </div>
            </li>`
                : ``
            }
        </ol>
    </div>
    ${
      CreateDataDto.profilesForm.length !== 0
        ? `
      <div class="section">
      <div class="section--title">
          <h2>
              <i class="section--title-icon single-textarea">
                  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
              </i>
              Профиль

          </h2>
      </div>
      <div class="section--content section--content-single-textarea">
      ${CreateDataDto.profilesForm
        .map((el) => {
          return `<p>${el.description ? el.description : ``}</p>`;
        })
        .join('')}
      </div>
  </div>
  `
        : ``
    } 
    ${
      CreateDataDto.experiencesForm.length !== 0
        ? `
    <div class="section">
        <div class="section--title">
            <h2>
                <i class="section--title-icon work">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none"></path>
                        <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path>
                    </svg>
                </i>
                Опыт работы
            </h2>
        </div>
        <ol class="section--list">
        ${CreateDataDto.experiencesForm
          .map((el) => {
            return `
            <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">${
                      el.dateBegin ? el.dateBegin : ''
                    } - ${el.dateFinish ? el.dateFinish : 'по Н.В.'}</div>
                    <div class="section--heading">
                        <h3>${el.position ? el.position : ''}</h3>
                    </div>
                    <div class="section--sub-heading">
                    ${el.employer ? el.employer + ',' : ''} ${
              el.city ? el.city : ''
            }
                    </div>
                </div>
                <div class="section--content">
                    <p>${el.description ? el.description : ''}</p>
                </div>
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
      CreateDataDto.coursesForm.length !== 0
        ? `
        <div class="section">
        <div class="section--title">
            <h2>
                <i class="section--title-icon education">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
                    </svg>
                </i>
                Образование и квалификации
            </h2>
        </div>
        <ol class="section--list">
        ${CreateDataDto.coursesForm
          .map((el) => {
            return `
            <li class="section--item">
            <div class="section--heading-group">
                <div class="section--date">
                ${el.dateBegin ? el.dateBegin + '-' : ''}  ${el.dateFinish}
                </div>
                <div class="section--heading">
                    <h3>${el.degree ? el.degree : ``}</h3>
                </div>
                <div class="section--sub-heading">
                ${el.institution ? el.institution + ',' : ``} ${
              el.city ? el.city : ``
            }
                </div>
                <div class="section--content">
                    <p>${el.description ? el.description : ``}</p>
                </div>
            </div>
        </li>`;
          })
          .join('')}
    </ol>
</div>
        `
        : ``
    } 
    ${
      CreateDataDto.interestsForm.length !== 0
        ? `
        <div class="section">
        <div class="section--title">
            <h2>
                <i class="section--title-icon">
                    <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </i>
                Интересы
            </h2>
        </div>
        <div class="section--content section--content-single-textarea">
        ${CreateDataDto.interestsForm
          .map((el) => {
            return ` ${el.hobby ? el.hobby + ',' : ``}`;
          })
          .join('')}
        </div>
    </div>
    `
        : ``
    } 
    ${
      CreateDataDto.recForm.length !== 0
        ? `
        <div class="section">
        <div class="section--title">
            <h2>
                <i class="section--title-icon reference">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </i>
                Рекомендации
            </h2>
        </div>
        <div class="section--content section--content-single-textarea">
        ${CreateDataDto.recForm
          .map((el) => {
            return `
              <p>${el.namecompany ? el.namecompany + ',' : ''} ${
              el.contactperson ? el.contactperson : ''
            }</p>
              <p>${el.number ? el.number + ',' : ''} ${
              el.email ? el.email : ''
            }</p>
              `;
          })
          .join('')}
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
                <i class="section--title-icon skill">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"></path>
                    </svg>
                </i>
                Навыки
            </h2>
        </div>
        <ol class="section--list skills">
        ${CreateDataDto.skillsForm
          .map((el) => {
            return `
            <li class="section--item">
            <div class="section--heading-group">
                <div class="section--heading">
                    <h3>${el.skill ? el.skill : ''}
                    </h3>
                </div>
                ${
                  el.level === '1'
                    ? ` <div class="section--sub-heading">Очень плохо</div>`
                    : ``
                }
                ${
                  el.level === '2'
                    ? ` <div class="section--sub-heading">Плохо</div>`
                    : ``
                }
                ${
                  el.level === '3'
                    ? ` <div class="section--sub-heading">Средне</div>`
                    : ``
                }${
              el.level === '4'
                ? ` <div class="section--sub-heading">Хорошо</div>`
                : ``
            }${
              el.level === '5'
                ? ` <div class="section--sub-heading">Очень хорошо</div>`
                : ``
            }
            </div>
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
                <div class="section--title-icon language">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                    </svg>
                </div>
                Языки
            </h2>
        </div>
        <ol class="section--list skills">
        ${CreateDataDto.languagesForm
          .map((el) => {
            return `
          <li class="section--item">
          <div class="section--heading-group">
              <div class="section--heading">
            
                  <h3>${el.language ? el.language : ''}</h3>
              </div>
              ${
                el.level === 'Начальный'
                  ? ` <div class="section--sub-heading">Начальный</div>`
                  : ``
              }
              ${
                el.level === 'Ниже среднего'
                  ? ` <div class="section--sub-heading">Ниже среднего</div>`
                  : ``
              }
              ${
                el.level === 'Средний'
                  ? ` <div class="section--sub-heading">Средний</div>`
                  : ``
              }${
              el.level === 'Выше среднего'
                ? ` <div class="section--sub-heading">Выше среднего</div>`
                : ``
            }${
              el.level === 'Продвинутый'
                ? ` <div class="section--sub-heading">Продвинутый</div>`
                : ``
            }
            ${
              el.level === 'Профессиональный'
                ? ` <div class="section--sub-heading">Профессиональный</div>`
                : ``
            }
          </div>
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
