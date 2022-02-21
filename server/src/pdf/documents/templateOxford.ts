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
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
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
            padding: 25px 0 5px 0;
            font-weight: 600
        }

        h1 span {
            position: relative;
            font-style: normal;
            display: inline;
            margin-right: 1px;
            padding: 0
        }

        h2 {
            font: 17px "Helvetica", Arial;
            font-weight: 600;
            margin: 0;
            padding: 0 0 15px 0;
            border-bottom: 2px solid #d2d2d2
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

        .sidebar--bg {
            position: fixed;
            left: 0;
            width: 25px;
            height: 18000px;
            background: #333
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

        .section.personal .section--item:first-child .section--heading-group {
            padding-top: 4px
        }

        .section.personal .section--item:first-child .section--date {
            top: 4px
        }

        .section:last-child {
            border: none
        }

        .section.section--summary {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #d2d2d2
        }

        .section.section--summary .section--content {
            padding-top: 0;
            padding-left: 0
        }

        .section--name {
            position: relative
        }

        .section--name.has--avatar h1 {
            padding-left: 70px
        }

        .section--avatar {
            display: inline-block;
            position: absolute;
            top: 15px;
            padding: 0;
            margin: 0;
            height: 55px;
            width: 55px;
            border-radius: 50%;
            -webkit-background-size: cover !important;
            background-size: cover !important
        }

        .section--title {
            display: block;
            position: relative;
            z-index: 99;
            margin: 0;
            padding: 15px 0 10px 0;
            page-break-inside: avoid;
            background: #fff;
            border-bottom: 2px solid #fff
        }

        .section--title span {
            display: inline-block;
            margin-right: 0
        }

        .section--time-line-overlay {
            position: absolute;
            top: 0;
            left: 155px;
            height: 100%;
            width: 1px;
            background: #2b2b38
        }

        .section--time-line {
            position: absolute;
            top: 0;
            left: 155px;
            height: 100%;
            width: 1px;
            background: #2b2b38
        }

        .section--time-line-hide-overlay {
            display: none;
            position: absolute;
            left: 151px;
            top: 24px;
            width: 10px;
            height: 100%;
            background: #fff;
            z-index: 9
        }

        .section--item:last-child {
            background: #fff
        }

        .section--item:last-child .section--time-line {
            height: 30px
        }

        .section--item:last-child .section--time-line-hide-overlay {
            display: inline
        }

        .section--time-line-dot {
            position: absolute;
            left: -3px;
            top: 18px;
            height: 6px;
            width: 6px;
            border-radius: 50%;
            background: #2b2b38
        }

        .section--heading-group {
            display: block;
            padding: 12px 0 0 170px;
            margin: 0;
            page-break-inside: avoid
        }

        .section.personal {
            margin-bottom: 5px
        }

        .section.personal .section--item {
            background: 0 0
        }

        .section.personal .section--heading-group {
            padding-top: 10px
        }

        .no-indent .section--item .section--heading-group {
            padding-left: 20px
        }

        .no-indent .section--item .section--content {
            padding-left: 20px
        }

        .no-indent .section--item .section--time-line {
            left: 5px
        }

        .no-indent .section--item .section--time-line-hide-overlay {
            left: 5px
        }

        .no-indent .section--time-line-overlay {
            left: 5px
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
            display: inline-block;
            padding-top: 10px;
            padding-bottom: 5px;
            width: 100%;
            margin: 0;
            padding-left: 0;
            border: none
        }

        .section--item.skills h3 {
            font-size: 13px
        }

        .section--item.skills:last-child {
            padding-bottom: 0
        }

        .skills--label {
            display: inline-block;
            width: 175px;
            margin: 0
        }

        .skills--stars {
            display: inline-block;
            position: relative;
            top: 0
        }

        .skills--stars svg {
            fill: #b1b1b1
        }

        .skills--stars svg.active {
            fill: #2b2b38
        }

        .skills--level {
            position: relative;
            display: inline-block;
            top: 0;
            margin: 0 0 0 5px;
            height: 9px;
            width: 9px;
            border-radius: 100%;
            opacity: .4
        }

        .skills--level.active {
            opacity: 1
        }

        .section--date {
            position: absolute;
            left: 0;
            text-align: left;
            top: 15px;
            width: 140px;
            font-size: 13px;
            padding: 0;
            margin: 0
        }

        .section.personal .section--date {
            top: 9px
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
            padding: 5px 0 0 170px;
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

        .c--434a54 .sidebar--bg, .c--434a54 .skills--level {
            background: #434a54 !important
        }

        .c--732937 .sidebar--bg, .c--732937 .skills--level {
            background: #732937 !important
        }

        .c--11345c .sidebar--bg, .c--11345c .skills--level {
            background: #11345c !important
        }

        .c--1a4a22 .sidebar--bg, .c--1a4a22 .skills--level {
            background: #1a4a22 !important
        }

        .c--02636f .sidebar--bg, .c--02636f .skills--level {
            background: #02636f !important
        }

    </style>
    <!-- ./css -->


</head>
<body class="c--434a54" style="overflow: hidden !important;">

<div class="sidebar--bg"></div>

<section class="sections">

    <div class="section--name  has--avatar">

        
${
  CreateDataDto.photo
    ? `<div class="section--avatar"
             style="background: url('http://localhost:5000/users/image/${CreateDataDto.photo}') no-repeat;">
        </div>`
    : `<div class="section--avatar"
             style="background: url('http://localhost:5000/users/image/asd.png') no-repeat;">
        </div>`
}

        <h1>${CreateDataDto.firstName} ${CreateDataDto.lastName}</h1>
    </div>

    <div class="section personal">
        <div class="section--title">
            <h2>
                Личные данные
            </h2>
        </div>

        <ol class="section--list">
            <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Имя
                    </div>
                    <div class="section--heading">
                        <h3>
                        ${CreateDataDto.firstName} ${CreateDataDto.lastName}
                        </h3>
                    </div>
                </div>
            </li>

            ${
              CreateDataDto.city ||
              CreateDataDto.postAdr ||
              CreateDataDto.postIndex
                ? `
                <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Адрес
                    </div>
                    <div class="section--heading">
                        <h3> ${
                          CreateDataDto.postAdr ? CreateDataDto.postAdr : ``
                        }<br>
                        ${
                          CreateDataDto.postIndex ? CreateDataDto.postIndex : ``
                        } 
                        ${CreateDataDto.city ? CreateDataDto.city : ``}
                        </h3>
                    </div>
                </div>
            </li>
            `
                : ``
            }
                          
            ${
              CreateDataDto.phoneNumber
                ? `
                <li class="section--item">
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
                ? `<li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Email
                    </div>
                    <div class="section--heading">
                        <h3>${CreateDataDto.email}
                        </h3>
                    </div>
                </div>
            </li>
            `
                : ``
            }
            
            ${
              CreateDataDto.birthDate
                ? `
                <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Дата рождения
                    </div>
                    <div class="section--heading">
                        <h3>
                        ${CreateDataDto.birthDate}
                        </h3>
                    </div>
                </div>
            </li>
            `
                : ``
            }
            

            ${
              CreateDataDto.placeOfBirth
                ? `
                <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Место рождения
                    </div>
                    <div class="section--heading">
                        <h3>            ${CreateDataDto.placeOfBirth}
                        </h3>
                    </div>
                </div>
            </li>
            `
                : ``
            }
           

            ${
              CreateDataDto.sex
                ? `
                <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Пол
                    </div>
                    <div class="section--heading">
                        <h3>             ${CreateDataDto.sex}

                        </h3>
                    </div>
                </div>
            </li>
            `
                : ``
            }
           
            ${
              CreateDataDto.citizenship
                ? `
                <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Гражданство
                    </div>
                    <div class="section--heading">
                        <h3>${CreateDataDto.citizenship}</h3>
                    </div>
                </div>
            </li>

            `
                : ``
            }
           
            ${
              CreateDataDto.familyStatus
                ? `
                <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Семейное положение
                    </div>
                    <div class="section--heading">
                        <h3>
                        ${CreateDataDto.familyStatus}
                        </h3>
                    </div>
                </div>
            </li>
            `
                : ``
            }
            

            ${
              CreateDataDto.website
                ? `
                <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Веб-сайт
                    </div>
                    <div class="section--heading">
                        <h3>        ${CreateDataDto.website}
                        </h3>
                    </div>
                </div>
            </li>
            `
                : ``
            }
            
            ${
              CreateDataDto.linkedIn
                ? `<li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        LinkedIn
                    </div>
                    <div class="section--heading">
                        <h3>${CreateDataDto.linkedIn}</h3>
                    </div>
                </div>
            </li>
            `
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
        <div class="section ">

        <div class="section--title">
            <h2>
                Опыт работы
            </h2>
        </div>

        <div class="section--time-line-overlay"></div>
        <ol class="section--list">
        ${CreateDataDto.experiencesForm
          .map((el) => {
            return `
            <li class="section--item">
                <div class="section--time-line">
                    <i class="section--time-line-dot"></i>
                </div>
                <div class="section--time-line-hide-overlay"></div>
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
        <div class="section ">

        <div class="section--title">
            <h2>
                Образование и квалификации
            </h2>
        </div>

        <div class="section--time-line-overlay"></div>

        <ol class="section--list">
        ${CreateDataDto.coursesForm
          .map((el) => {
            return `
            <li class="section--item">
            <div class="section--time-line">
                <i class="section--time-line-dot"></i>
            </div>
            <div class="section--time-line-hide-overlay"></div>
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
      CreateDataDto.interestsForm.length !== 0
        ? `
        <div class="section">

        <div class="section--title">
      
            <h2>
                Интересы
            </h2>
        </div>

        <div class="section--content section--content-single-textarea">
        ${CreateDataDto.interestsForm
          .map((el) => {
            return `
            <p>${el.hobby ? el.hobby : ``}</p>
            `;
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
                Навыки
            </h2>
        </div>


        <ol class="section--list skills">
        ${CreateDataDto.skillsForm
          .map((el) => {
            return `
            <li class="section--item skills">
                <div class="skills--label">
                    <h3>${el.skill ? el.skill : ''}</h3>
                </div>
                <div class="skills--stars">

                ${
                  el.level === '1'
                    ? `
                <i class="skills--level active"></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>

                `
                    : ``
                }
                ${
                  el.level === '2'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>

                `
                    : ``
                }
                ${
                  el.level === '3'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>

                `
                    : ``
                }
                ${
                  el.level === '4'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level "></i>

                `
                    : ``
                }
                ${
                  el.level === '5'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                `
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
                Языки
            </h2>
        </div>
        <ol class="section--list skills">
        ${CreateDataDto.languagesForm
          .map((el) => {
            return `
            <li class="section--item skills">
                <div class="skills--label">
                    <h3>${el.language ? el.language : ''}</h3>
                </div>
                ${
                  el.level === 'Начальный'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
    
                `
                    : ``
                }
                ${
                  el.level === 'Ниже среднего'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
    
                `
                    : ``
                } 
                ${
                  el.level === 'Средний'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
    
                `
                    : ``
                }
                ${
                  el.level === 'Выше среднего'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
    
                `
                    : ``
                } 
                ${
                  el.level === 'Продвинутый'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level "></i>
    
                `
                    : ``
                } 
                ${
                  el.level === 'Профессиональный'
                    ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
    
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
