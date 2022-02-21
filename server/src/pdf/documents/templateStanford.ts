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
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet">
    <!-- ./fonts -->

    <!-- css -->
    <style type="text/css">
        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
        }

        html {
            height: 100%;
        }

        html[lang=nl] .sidebar {
            padding-left: 15px;
        }

        html[lang=nl] .sidebar--label {
            display: inline-block;
            width: 100%;
            max-width: 106px;
            margin-top: -2px;
        }

        html[lang=nl] .sidebar--item-align-right {
            display: inline-block;
            margin-right: 10px;
            width: 60px;
            text-align: right;
        }

        body {
            width: 21cm;
            height: 100%;
            min-height: 29.7cm;
            position: relative;
            margin: 0;
            padding: 0 0;
            color: #333333;
            line-height: 22px;
            font: 12px "Helvetica", Arial;
            font-style: normal;
        }

        h1 {
            font-style: normal;
            font-size: 30px;
            margin: 0 0 20px 0;
            padding: 13px 0 15px 0;
            font-weight: 600;
            border-bottom: 1px solid #d2d2d2;
        }

        h1 span {
            position: relative;
            font-style: normal;
            display: inline;
            margin-right: 1px;
            padding: 0;
        }

        h2 {
            font-size: 17px;
            font-weight: 600;
            margin: 0;
            padding: 0;
        }

        h3 {
            font-size: 14px;
            font-weight: 600;
            margin: 0;
            padding: 0;
            max-width: 430px;
        }

        p {
            color: #4c4c4c;
            line-height: 18px;
            font-weight: 400;
            margin: 0;
            padding: 0;
            text-align: left;
        }

        hr {
            border: none;
            height: 1px;
            width: 100%;
            padding: 0;
            margin: 0;
            background: #d2d2d2;
        }

        .section--first-name {
            display: inline-block;
        }

        .section--last-name {
            display: inline-block;
            position: relative;
            left: 5px;
        }

        .sections {
            left: 235px;
            position: relative;
            width: 535px;
        }

        .section {
            position: relative;
            width: 100%;
            padding: 0;
        }

        .section p {
            display: block;
            font-style: normal;
        }

        .section:last-child {
            border: none;
        }

        .section.section--summary {
            margin-top: -10px;
        }

        .section--title {
            display: block;
            position: relative;
            z-index: 99;
            margin: 0 0 0 0;
            font-weight: 600;
            background: #fff;
            padding: 15px 0 15px 0;
            page-break-inside: avoid;
            border-bottom: 1px solid #d2d2d2;
        }

        .section--title span {
            display: inline-block;
            margin-right: 0px;
        }

        .section--heading-group {
            display: block;
            padding: 15px 0 0 0;
            margin: 0;
            /*page-break-inside: avoid;*/
        }

        .section--list {
            display: block;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .section--list.skills {
            padding-top: 5px;
            margin-bottom: 10px;
        }

        .section--item {
            display: block;
            position: relative;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .section--item.skills {
            display: inline-block;
            padding-top: 8px;
            padding-bottom: 0;
            width: 100%;
            margin: 0;
            padding-left: 5px;
        }

        .section--item.skills h3 {
            font-size: 13px;
        }

        .section--item.skills:last-child {
            padding-bottom: 0;
        }

        .skills--label {
            display: inline-block;
            width: 175px;
            margin: 5px 0 0 -5px;
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
            border-radius: 6px;
        }

        .skills--level-filler {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: #b1b1b1;
            border-radius: 6px;
        }

        .skills--stars {
            display: inline-block;
            position: relative;
            top: 4px;
        }

        .skills--stars svg {
            fill: #b1b1b1;
        }

        .skills--stars svg.active {
            fill: #2b2b38;
        }

        .section--date {
            position: absolute;
            right: 0;
            text-align: right;
            top: 16px;
            width: 125px;
            width: 142px;
            font-size: 13px;
            padding: 0;
            margin: 0;
        }

        .section--heading {
            display: block;
            padding: 0;
            margin: 0;
        }

        .section--sub-heading {
            display: block;
            padding: 3px 0 0 0;
            margin: 0;
            font-style: italic;
            font-size: 13px;
        }

        .section--content {
            display: block;
            padding: 5px 0 0 0;
            margin: 0;
        }

        .section--content p {
            display: block;
        }

        .section--content ul, .section--content ol {
            white-space: normal;
            font-weight: 400;
            list-style-position: outside;
            color: #4c4c4c;
            margin: 0;
            padding: 0 0 0 16px;
            text-align: left;
        }

        .section--content ul li, .section--content ol li {
            line-height: 18px;
        }

        .section--content ul li strong, .section--content ol li strong {
            display: inline-block;
            text-align: left;
        }

        .section--content ul li {
            list-style-type: disc;
        }

        .section--content ol {
            padding-left: 14px;
        }

        .section--content-single-textarea {
            padding-top: 10px;
        }

        .sidebar--bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 215px;
            background: #2b2b38;
            height: 18000px;
            overflow-x: hidden;
            overflow-y: hidden;
        }

        .sidebar {
            left: 0;
            overflow: hidden;
            position: absolute;
            color: #fff;
            padding: 29px 0 0 20px;
            width: 215px;
            height: auto;
        }

        .sidebar.sidebar--no-avatar {
            padding-top: 16px;
        }

        .avatar {
            display: inline-block;
            padding: 0;
            margin: 0 0 0 9px;
            height: 155px;
            width: 155px;
            border-radius: 50%;
            background-size: cover !important;
        }

        .sidebar--data {
            display: block;
        }

        .sidebar--title {
            font-size: 15px;
            font-style: normal;
            padding: 20px 0 11px 0;
            margin: 0 0 10px 0;
            page-break-inside: avoid;
            border-bottom: 1px solid #fff;
        }

        .sidebar--title span {
            font-weight: 400;
            font-style: normal;
            margin-right: 0px;
        }

        .sidebar--title svg {
            position: relative;
            top: 4px;
            margin-right: 4px;
        }

        .sidebar--label {
            font-weight: 600;
        }

        .sidebar--list {
            display: block;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .sidebar--item {
            display: block;
            list-style: none;
            font-size: 12px;
            margin: 0;
            page-break-inside: avoid;
            padding: 8px 5px 0 0;
        }

        .sidebar--item:last-child {
            padding-bottom: 0;
        }

        .sidebar--item-text {
            line-height: 21px;
        }

        .sidebar--item-align-right {
            float: right;
            margin-right: 20px;
        }

        .c--434a54 .sidebar--bg, .c--434a54 .skills--level-filler {
            background: #434a54 !important;
        }

        .c--efa100 .sidebar--bg, .c--efa100 .skills--level-filler {
            background: #efa100 !important;
        }

        .c--3f6592 .sidebar--bg, .c--3f6592 .skills--level-filler {
            background: #3f6592 !important;
        }

        .c--d770ad .sidebar--bg, .c--d770ad .skills--level-filler {
            background: #d770ad !important;
        }

        .c--da4453 .sidebar--bg, .c--da4453 .skills--level-filler {
            background: #da4453 !important;
        }

        strong {
            white-space: nowrap;
        }

    </style>
    <!-- ./css -->

</head>
<body class="c--434a54" style="overflow: hidden !important;">

<div class="sidebar--bg"></div>

<aside class="sidebar  ">
    ${
      CreateDataDto.photo
        ? `<div class="avatar"
         style="background:url('http://localhost:5000/users/image/${CreateDataDto.photo}') no-repeat;">
    </div>`
        : `<div class="avatar"
         style="background:url('http://localhost:5000/users/image/asd.png') no-repeat;">
    </div>`
    }
    <div class="sidebar--data">
        <h2 class="sidebar--title">
            Личные данные
        </h2>

        <ul class="sidebar--list">
            <li class="sidebar--item">
                <span class="sidebar--label">Имя</span><br>
                ${CreateDataDto.firstName}  ${CreateDataDto.lastName}
            </li>

            ${
              CreateDataDto.city ||
              CreateDataDto.postAdr ||
              CreateDataDto.postIndex
                ? `
                <li class="sidebar--item">
                <span class="sidebar--label">Адрес</span><br>
                ${CreateDataDto.postAdr ? CreateDataDto.postAdr : ``}<br>
                 ${CreateDataDto.postIndex ? CreateDataDto.postIndex : ``} ${
                    CreateDataDto.сity ? CreateDataDto.сity : ``
                  }
                
            </li>

            `
                : ``
            }
           
            ${
              CreateDataDto.phoneNumber
                ? `
                <li class="sidebar--item">
                <span class="sidebar--label">Номер телефона</span><br>
                ${CreateDataDto.phoneNumber}
            </li>

            `
                : ``
            }
                           

            <li class="sidebar--item">
                <span class="sidebar--label">Email</span><br>
                ${CreateDataDto.email}
            </li>
            ${
              CreateDataDto.birthDate
                ? `
                <li class="sidebar--item">
                <span class="sidebar--label">Дата рождения</span><br>
                ${CreateDataDto.birthDate}
            </li>
            `
                : ``
            } 
           
            ${
              CreateDataDto.placeOfBirth
                ? `
                <li class="sidebar--item">
                <span class="sidebar--label">Место рождения</span><br>
                ${CreateDataDto.placeOfBirth}
            </li>
            `
                : ``
            }
            
            ${
              CreateDataDto.sex
                ? `
                <li class="sidebar--item">
                <span class="sidebar--label">Пол</span><br>
                ${CreateDataDto.sex}
            </li>
            `
                : ``
            }
                            
            ${
              CreateDataDto.citizenship
                ? `
                <li class="sidebar--item">
                <span class="sidebar--label">Гражданство</span><br>
                ${CreateDataDto.citizenship}
            </li>
            `
                : ``
            }
            ${
              CreateDataDto.familyStatus
                ? `
                <li class="sidebar--item">
                <span class="sidebar--label">Семейное положение</span><br>
                ${CreateDataDto.familyStatus}
            </li>
            `
                : ``
            }
            

            ${
              CreateDataDto.website
                ? `
                <li class="sidebar--item">
                <span class="sidebar--label">Веб-сайт</span><br>
                ${CreateDataDto.website}
            </li>
            `
                : ``
            }

            ${CreateDataDto.linkedIn ? `` : ``}
            <li class="sidebar--item">
                <span class="sidebar--label">LinkedIn</span><br>
                ${CreateDataDto.linkedIn}
            </li>
        </ul>

    </div>
    ${
      CreateDataDto.interestsForm.length !== 0
        ? `
        <div class="sidebar--data">
        <h2 class="sidebar--title">
            Интересы
        </h2>
        <ul class="sidebar--list">
        ${CreateDataDto.interestsForm
          .map((el) => {
            return `
            <li class="sidebar--item">
            <span class="sidebar--label">${el.hobby ? el.hobby : ``}</span>
        </li>
        `;
          })
          .join('')}
        </ul>
    </div>
    `
        : ``
    }

    
    ${
      CreateDataDto.languagesForm.length !== 0
        ? `
        <div class="sidebar--data">
        <h2 class="sidebar--title">
            Языки
        </h2>

        <ul class="sidebar--list">
        ${CreateDataDto.languagesForm
          .map((el) => {
            return `
            <li class="sidebar--item">
                <span class="sidebar--label">${
                  el.language ? el.language : ''
                }</span>
                ${
                  el.level === 'Начальный'
                    ? `
                    <span class="sidebar--item-align-right">начальный</span>
                `
                    : ``
                }
                ${
                  el.level === 'Ниже среднего'
                    ? `
                    <span class="sidebar--item-align-right">ниже среднего</span>
                `
                    : ``
                }
                ${
                  el.level === 'Средний'
                    ? `
                    <span class="sidebar--item-align-right">средний</span>
                `
                    : ``
                }
                ${
                  el.level === 'Выше среднего'
                    ? `
                    <span class="sidebar--item-align-right">выше среднего</span>
                `
                    : ``
                }
                ${
                  el.level === 'Продвинутый'
                    ? `
                    <span class="sidebar--item-align-right">продвинутый</span>
                `
                    : ``
                } 
                  ${
                    el.level === 'Профессиональный'
                      ? `
                      <span class="sidebar--item-align-right">профессиональный</span>
                  `
                      : ``
                  } 
            </li>
            `;
          })
          .join('')}
            
        </ul>

    </div>
    `
        : ``
    }
    


</aside>

<section class="sections">

    <div class="section--name">
        <h1>
        ${CreateDataDto.firstName}  ${CreateDataDto.lastName}
        </h1>
    </div>

    ${
      CreateDataDto.profilesForm.length !== 0
        ? `
        <div class="section">


        <div class="section section--summary">
            <div class="section--content">
            ${CreateDataDto.profilesForm
              .map((el) => {
                return `
                    <p>${el.description ? el.description : ''}</p>
                    `;
              })
              .join('')}
            </div>
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

        <div class="section--time-line-overlay"></div>
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
    
                <div class="section--content">
                    <p>${el.description ? el.description : ''}</p>
                </div>
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
                      <p>${el.number ? el.number + ',' : ''} ${
                  el.email ? el.email : ''
                }</p>
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
        <div class="section--time-line-overlay"></div>
        <ol class="section--list skills">
        ${CreateDataDto.skillsForm
          .map((el) => {
            return `
            <li class="section--item skills">
            <div class="skills--label">
                <h3> ${el.skill ? el.skill : ''}</h3>
            </div>
            ${
              el.level === '1'
                ? `  <div class="skills--level">
                <div class="skills--level-filler" style="width:1%;"></div>
            </div>`
                : ``
            }
            ${
              el.level === '2'
                ? ` <div class="skills--level">
            <div class="skills--level-filler" style="width:25%;"></div>
        </div>`
                : ``
            }
            ${
              el.level === '3'
                ? `  <div class="skills--level">
              <div class="skills--level-filler" style="width:50%;"></div>
          </div>`
                : ``
            }
            ${
              el.level === '4'
                ? `  <div class="skills--level">
              <div class="skills--level-filler" style="width:75%;"></div>
          </div>`
                : ``
            }
            ${
              el.level === '5'
                ? `  <div class="skills--level">
                <div class="skills--level-filler" style="width:100%;"></div>
            </div>`
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
