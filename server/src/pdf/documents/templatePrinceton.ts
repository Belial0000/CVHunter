export default (CreateDataDto) => {
  const today = new Date();
  return `<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="format-detection" content="telephone=no">

    <!-- fonts -->
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400" rel="stylesheet">
    <!-- ./fonts -->

    <style>
        @import 'https://fonts.googleapis.com/css?family=Slabo+27px';
        @import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400';
    </style>

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
            font: 16px "Helvetica", Arial;

            text-transform: uppercase;
            font-weight: 700;
            margin: 0;
            padding: 0
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
            margin: 20px 0 0 0;
            background: #fff;
            padding: 15px 0 15px 0;
            page-break-inside: avoid;
            border-top: 2px solid #d2d2d2
        }

        .section--title span {
            display: inline-block;
            margin-right: 0
        }

        .section--heading-group {
            display: block;
            padding: 15px 0 0 170px;
            margin: 0;
            page-break-inside: avoid
        }

        .section--list {
            display: block;
            list-style: none;
            padding: 0;
            margin: 0
        }

        .section--list.no-indent .section--item .section--heading-group {
            padding-left: 0
        }

        .section--list.no-indent .section--item .section--content {
            padding-left: 0
        }

        .section--list.section--list-skills .section--sub-heading {
            padding-top: 0;
            max-width: 120px;
            text-align: right;
            font-style: normal
        }

        .section--list.section--list-skills .section--heading-group {
            padding-left: 0
        }

        .section--list.section--list-skills .section--date {
            left: 150px;
            text-align: left;
            font-weight: 700
        }

        .section--item {
            display: block;
            position: relative;
            list-style: none;
            padding: 0;
            margin: 0
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
            margin: 5px 0 0 -5px
        }

        .skills--level {
            display: inline-block;
            position: relative;
            top: 0;
            height: 7px;
            width: 150px;
            padding: 0;
            margin: 0;
            background: #eaeaea;
            border-radius: 6px
        }

        .skills--level-filler {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: #b1b1b1;
            border-radius: 6px
        }

        .skills--stars {
            display: inline-block;
            position: relative;
            top: 4px
        }

        .skills--stars svg {
            fill: #b1b1b1
        }

        .skills--stars svg.active {
            fill: #2b2b38
        }

        .section--date {
            position: absolute;
            left: 0;
            text-align: right;
            top: 15px;
            width: 155px;
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

        .c--333333 h1, .c--333333 h2 {
            color: #333 !important
        }

        .c--da4453 h1, .c--da4453 h2 {
            color: #da4453 !important
        }

        .c--3f6592 h1, .c--3f6592 h2 {
            color: #3f6592 !important
        }

        .c--82652b h1, .c--82652b h2 {
            color: #82652b !important
        }

        .c--37bc9b h1, .c--37bc9b h2 {
            color: #37bc9b !important
        }

    </style>


</head>
<body class="c--333333" style="overflow: hidden !important;">

<section class="sections">

    <div class="section--name  has--avatar">


        
        ${
          CreateDataDto.photo
            ? `<div class="section--avatar" style="background:url('http://localhost:5000/users/image/${CreateDataDto.photo}'); no-repeat;"></div>
        </div>`
            : `<div class="section--avatar" style="background:url('http://localhost:5000/users/image/asd.png'); no-repeat;"></div>
        </div>`
        }
        <h1 style=" margin-left: 120px;">${CreateDataDto.firstName} ${
    CreateDataDto.lastName
  } </h1>
    </div>


    <div class="section">
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
                        <h3>${
                          CreateDataDto.postAdr ? CreateDataDto.postAdr : ``
                        }
                        ${
                          CreateDataDto.postIndex ? CreateDataDto.postIndex : ``
                        } ${CreateDataDto.сity ? CreateDataDto.сity : ``}
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
            

            <li class="section--item">
                <div class="section--heading-group">
                    <div class="section--date">
                        Email
                    </div>
                    <div class="section--heading">
                        <h3>${CreateDataDto.email}</h3>
                    </div>
                </div>
            </li>

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
                        <h3>${CreateDataDto.placeOfBirth}</h3>
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
                        <h3> ${CreateDataDto.sex}
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
                ? ` <li class="section--item">
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
                        <h3>${CreateDataDto.website}
                        </h3>
                    </div>
                </div>
            </li>
            `
                : ``
            } 
           
            ${
              CreateDataDto.linkedIn
                ? `
            <li class="section--item">
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
            return `
                <p>${el.description ? el.description : ''}</p>
                `;
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
                  el.dateBegin ? el.dateBegin : 'X'
                } - ${el.dateFinish ? el.dateFinish : 'по Н.В.'}</div>
                <div class="section--heading">
                    <h3>#${el.position ? el.position : ''}</h3>
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
                    ${el.dateBegin ? el.dateBegin : 'X'} - ${
              el.dateFinish ? el.dateFinish : 'по Н.В.'
            }
                    </div>
                    <div class="section--heading">
                        <h3>${el.degree ? el.degree : ''}</h3>
                    </div>
                    <div class="section--sub-heading">
                    ${el.institution ? el.institution + ',' : ''} ${
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
            <p> ${el.hobby ? el.hobby : ``}</p>
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
                Навыки
            </h2>
        </div>


        <ol class="section--list skills section--list-skills">
        ${CreateDataDto.skillsForm
          .map((el) => {
            return `
            <li class="section--item">
            <div class="section--heading-group">
            ${
              el.level === '1'
                ? ` <div class="section--date">Очень плохо</div>`
                : ``
            }
            ${el.level === '2' ? ` <div class="section--date">плохо</div>` : ``}
            ${
              el.level === '3' ? ` <div class="section--date">средне</div>` : ``
            }
            ${
              el.level === '4' ? ` <div class="section--date">хорошо</div>` : ``
            }
            ${
              el.level === '5'
                ? ` <div class="section--date">Очень хорошо</div>`
                : ``
            }
                <div class="section--sub-heading">
                ${el.skill ? el.skill : ''}
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
            return `<li class="section--item">
            <div class="section--heading-group">
                <div class="section--date">
                ${el.language ? el.language : ''}
                </div>
                ${
                  el.level === 'Начальный'
                    ? `
                    <div class="section--heading"><h3>начальный</h3></div>
                `
                    : ``
                }
                ${
                  el.level === 'Ниже среднего'
                    ? `
                    <div class="section--heading"><h3>ниже среднего</h3></div>
                `
                    : ``
                }
                ${
                  el.level === 'Средний'
                    ? `
                    <div class="section--heading"><h3>средний</h3></div>
                `
                    : ``
                }
                ${
                  el.level === 'Выше среднего'
                    ? `
                    <div class="section--heading"><h3>выше среднего</h3></div>
                `
                    : ``
                }
                ${
                  el.level === 'Продвинутый'
                    ? `
                    <div class="section--heading"><h3>продвинутый</h3></div>
                `
                    : ``
                } 
                  ${
                    el.level === 'Профессиональный'
                      ? `
                      <div class="section--heading"><h3>профессиональный</h3></div>
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
</section>

<div id="mountHere"></div>
</body>
</html>`;
};
