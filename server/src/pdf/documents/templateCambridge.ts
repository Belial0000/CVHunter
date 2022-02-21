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
            font: 12px "Helvetica", Arial;;
            font-style: normal
        }

        h1 {
            font-style: normal;
            font-size: 30px;
            margin: 0;
            padding: 12px 0 22px 0;
            font-weight: 600;
            color: #fff;
            letter-spacing: .04em
        }

        h1 span {
            position: relative;
            font-style: normal;
            display: inline;
            margin-right: 3px;
            padding: 0
        }

        .avatar--no h1 {
            margin-left: -235px
        }

        h2 {
            text-transform: uppercase;
            letter-spacing: .08em;
            font-size: 14px;
            font-weight: 600;
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
            padding: 0;
            text-align: justify
        }

        hr {
            border: none;
            height: 1px;
            width: 100%;
            padding: 0;
            margin: 0;
            background: #d2d2d2
        }

        svg {
            fill: #333
        }

        .hero--bg {
            position: fixed;
            top: -50px;
            left: -20px;
            height: 122px;
            width: 120%;
            background: #476377
        }

        .avatar--no .hero--bg {
            top: -55px
        }

        .section--first-name {
            display: inline-block
        }

        .section--last-name {
            display: inline-block;
            position: relative;
            left: 5px
        }

        .sections {
            left: 255px;
            position: relative;
            width: 520px
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
            margin-top: 15px
        }

        .section--title {
            display: inline-block;
            width: 100%;
            position: relative;
            z-index: 99;
            margin: 0;
            background: #fff;
            padding: 15px 0 10px 3px;
            page-break-inside: avoid
        }

        .section--title hr {
            position: absolute;
            width: 95%;
            top: 25px;
            left: 5%;
            heigth: 2px;
            z-index: 0;
            border: none;
            background: #d2d2d2
        }

        .section--title span {
            position: relative;
            z-index: 9;
            width: auto;
            padding-right: 2px;
            background: #fff
        }

        .section--title span:last-child {
            padding-right: 10px;
            background: #fff
        }

        .section--title-icon {
            position: relative;
            top: 2px;
            display: none;
            height: 32px;
            width: 32px;
            margin-left: -15px;
            margin-right: 10px;
            border-radius: 50%;
            border: 1px solid #2b2b38;
            background: #fff
        }

        .section--title-icon svg {
            position: relative;
            top: 3px;
            height: 22px;
            fill: #2b2b38
        }

        .section--title-icon.education svg {
            left: 2px
        }

        .section--title-icon.course svg {
            top: 4px;
            left: 3px
        }

        .section--title-icon.work svg {
            left: 3px
        }

        .section--title-icon.certificate svg {
            top: 4px;
            left: 3px
        }

        .section--title-icon.single-textarea svg {
            top: 4px;
            left: 3px
        }

        .section--title-icon.extra-curricular svg {
            top: 3px;
            left: 3px
        }

        .section--title-icon.internships svg {
            left: 3px
        }

        .section--title-icon.skill svg {
            top: 4px;
            left: 3px
        }

        .section--title-icon.reference svg {
            top: 4px;
            left: 6px
        }

        .section--time-line-overlay {
            position: absolute;
            top: 0;
            left: 5px;
            height: 100%;
            width: 1px;
            background: #2b2b38
        }

        .section--time-line {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 1px;
            background: #607d8b
        }

        .section--time-line-hide-overlay {
            display: none;
            position: absolute;
            left: -9px;
            top: 26px;
            width: 10px;
            height: 100%;
            background: #fff;
            z-index: 9
        }

        .section--item:last-child {
            background: #fff;
            padding-bottom: 0
        }

        .section--item:last-child .section--time-line {
            height: 28px
        }

        .section--item:last-child .section--time-line-hide-overlay {
            display: inline
        }

        .section--time-line-dot {
            position: absolute;
            left: 0;
            top: 25px;
            height: 1px;
            width: 9px;
            border-radius: 0;
            background: #607d8b
        }

        .section--heading-group {
            display: block;
            margin: 0;
            padding: 0 0 6px 0;
            page-break-inside: avoid
        }

        .section--list {
            display: block;
            list-style: none;
            padding: 0 0 0 5px;
            margin: 0
        }

        .section--list.skills {
            margin-bottom: 23px
        }

        .section--list.no-indent .section--item {
            padding-left: 20px
        }

        .section--item {
            display: block;
            position: relative;
            list-style: none;
            padding: 0 0 0 140px;
            padding: 0 0 0 160px;
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
            font-size: 12px;
        }

        .section--item.skills:last-child {
            padding-bottom: 0
        }

        .skills--label {
            display: inline-block;
            width: 175px;
            margin: 0 0 0 -5px
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
            left: 15px;
            top: 16px;
            width: 120px;
            width: 150px;
            font-size: 12px;
            padding: 0;
            margin: 0
        }

        .section--heading {
            display: block;
            padding: 15px 0 0 0;
            margin: 0
        }

        .section--sub-heading {
            display: block;
            padding: 0;
            margin: 0;
            font-style: italic;
            font-size: 12px;
        }

        .section--content {
            display: inline-block;
            width: 100%;
            padding: 0;
            margin: 0
        }

        .section--content p {
            display: block
        }

        .section--content ol, .section--content ul {
            page-break-inside: auto;
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
            padding-bottom: 10px
        }

        .sidebar--bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 240px;
            height: 18000px;
            overflow-x: hidden;
            overflow-y: hidden
        }

        .avatar--no .sidebar {
            margin-top: 48px
        }

        .sidebar {
            left: 0;
            position: fixed;
            padding: 18px 0 0 20px;
            width: 240px;
            height: auto
        }

        .avatar {
            display: inline-block;
            padding: 0;
            margin: 20px 0 0 -5px;
            height: 125px;
            width: 125px;
            border-radius: 50%;
            background-size: cover !important;
            border: 4px solid #fff
        }

        .sidebar--data {
            display: block
        }

        .sidebar--title {
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            padding: 20px 0 5px 0;
            margin: 0;
            page-break-inside: avoid;
            border-bottom: 1px solid #fff
        }

        .sidebar--title span {
            font-weight: 400;
            font-style: normal;
            margin-right: 1px
        }

        .sidebar--title .language svg {
            height: 18px;
            width: 18px
        }

        .sidebar--title svg {
            display: none;
            position: relative;
            top: 4px;
            height: 19px;
            width: 19px;
            margin-right: 4px
        }

        .sidebar--label {
            font-weight: 600
        }

        .sidebar--list {
            display: block;
            list-style: none;
            margin: 0;
            padding: 0
        }

        .sidebar--item {
            display: block;
            list-style: none;
            font-size: 13px;
            margin: 0;
            padding: 0 5px 8px 0
        }

        .sidebar--item:last-child {
            padding-bottom: 0
        }

        .sidebar--item-text {
            line-height: 21px
        }

        .sidebar--item-align-right {
            float: right;
            position: relative;
            margin-right: 20px
        }

        .sidebar--item-level {
            position: relative;
            display: inline-block;
            top: 1px;
            margin-left: 3px;
            height: 8px;
            width: 8px;
            border-radius: 100%;
            opacity: .4
        }

        .sidebar--item-level.active {
            opacity: 1
        }

        .c--ebebeb .hero--bg {
            background: #fff !important
        }

        .c--ebebeb h1 {
            color: #333
        }

        .c--476477 .hero--bg, .c--476477 .sidebar--item-level, .c--476477 .skills--level {
            background: #476477 !important
        }

        .c--476477 .section--item.skills, .c--476477 .sidebar--bg {
            border-color: #476477 !important
        }

        .c--af2942 .hero--bg, .c--af2942 .sidebar--item-level, .c--af2942 .skills--level {
            background: #af2942 !important
        }

        .c--af2942 .section--item.skills, .c--af2942 .sidebar--bg {
            border-color: #af2942 !important
        }

        .c--3f6592 .hero--bg, .c--3f6592 .sidebar--item-level, .c--3f6592 .skills--level {
            background: #3f6592 !important
        }

        .c--3f6592 .section--item.skills, .c--3f6592 .sidebar--bg {
            border-color: #3f6592 !important
        }

        .c--379047 .hero--bg, .c--379047 .sidebar--item-level, .c--379047 .skills--level {
            background: #379047 !important
        }

        .c--379047 .section--item.skills, .c--379047 .sidebar--bg {
            border-color: #379047 !important
        }

        .c--82652b .hero--bg, .c--82652b .sidebar--item-level, .c--82652b .skills--level {
            background: #82652b !important
        }

        .c--82652b .section--item.skills, .c--82652b .sidebar--bg {
            border-color: #82652b !important
        }
    </style>
    <!-- ./css -->


</head>
<body class="c--3f6592 " style="overflow: hidden !important;">

<div class="sidebar--bg"></div>
<div class="hero--bg"></div>


<aside class="sidebar">

    
    ${CreateDataDto.photo ? `<div class="avatar" style="background:url('http://localhost:5000/users/image/${CreateDataDto.photo}') no-repeat;">
    </div>` : `<div class="avatar" style="background:url('http://localhost:5000/users/image/asd.png') no-repeat;">
    </div>`}

    <div class="sidebar--data">
        <h2 class="sidebar--title">
            <span class="sidebar--title-icon">
                <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
            </span>
            Личные данные
        </h2>

        <ul class="sidebar--list">
            <li class="sidebar--item">
                <span class="sidebar--label">Имя</span><br>
                ${CreateDataDto.firstName} ${CreateDataDto.lastName}
            </li>

            ${CreateDataDto.postAdr | CreateDataDto.postIndex | CreateDataDto.сity ? `
            <li class="sidebar--item">
                <span class="sidebar--label">Адрес</span><br>
                ${CreateDataDto.postAdr} <br>
                ${CreateDataDto.postIndex} ${CreateDataDto.сity}
            </li>
            `
      : ``}

            ${CreateDataDto.phoneNumber ? `
            <li class="sidebar--item">
                <span class="sidebar--label">Номер телефона</span><br>
                ${CreateDataDto.phoneNumber}
            </li>
            `
      : ``}

            <li class="sidebar--item">
                <span class="sidebar--label">Email</span><br>
                ${CreateDataDto.email}
            </li>

            ${CreateDataDto.birthDate ? `
            <li class="sidebar--item">
                <span class="sidebar--label">Дата рождения</span><br>
                ${CreateDataDto.birthDate}
            </li>
            `
      : ``}

            ${CreateDataDto.placeOfBirth ? `
            <li class="sidebar--item">
                <span class="sidebar--label">Место рождения</span><br>
                ${CreateDataDto.placeOfBirth}
            </li>
            `
      : ``}

            ${CreateDataDto.sex ? `
            <li class="sidebar--item">
                <span class="sidebar--label">Пол</span><br>
                ${CreateDataDto.sex}
            </li>
            `
      : ``}

            ${CreateDataDto.citizenship ? `
            <li class="sidebar--item">
                <span class="sidebar--label">Гражданство</span><br>
                ${CreateDataDto.citizenship}
            </li>
            `
      : ``}

            ${CreateDataDto.familyStatus ? `
            <li class="sidebar--item">
                <span class="sidebar--label">Семейное положение</span><br>
                ${CreateDataDto.familyStatus}
            </li>
            `
      : ``}

            ${CreateDataDto.website ? `
            <li class="sidebar--item">
                <span class="sidebar--label">Веб-сайт</span><br>
                ${CreateDataDto.website}
            </li>
            `
      : ``}

            ${CreateDataDto.linkedIn ? `
            <li class="sidebar--item">
                <span class="sidebar--label">LinkedIn</span><br>
                ${CreateDataDto.linkedIn}
            </li>
            `
      : ``}
        </ul>

    </div>

    ${CreateDataDto.interestsForm.length !== 0 ? `
    <div class="sidebar--data">
        <h2 class="sidebar--title">
                    <span class="sidebar--title-icon">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                            <path d="M0 0h24v24H0z" fill="none"></path>
                        </svg>
                    </span>
            Интересы
        </h2>
        <ul class="sidebar--list">
        ${CreateDataDto.interestsForm.map((el) => {
        return `<li class="sidebar--item sidebar--item-text">${el.hobby}</li>`;
      }).join('')}
       </ul>
    </div>
    `
      : ``}

    ${CreateDataDto.languagesForm.length !== 0 ? `
    <div class="sidebar--data">
        <h2 class="sidebar--title">
                        <span class="sidebar--title-icon language">
                            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                            </svg>
                        </span>
            Языки
        </h2>
        <ul class="sidebar--list">
        ${CreateDataDto.languagesForm.map((el) => {
        return `
            <li class="sidebar--item">
                <span class="sidebar--label">${el.language ? el.language : ''}</span>
                <span class="sidebar--item-align-right">
                                    ${
                                      el.level === 'Начальный'
                                        ? `
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>
                        
                                    `
                                        : ``
                                    }
                                    ${
                                      el.level === 'Ниже среднего'
                                        ? `
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>
                        
                                    `
                                        : ``
                                    } 
                                    ${
                                      el.level === 'Средний'
                                        ? `
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>                     
                                    `
                                        : ``
                                    }
                                    ${
                                      el.level === 'Выше среднего'
                                        ? `
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level "></i>
                                        <i class="sidebar--item-level "></i>                       
                                    `
                                        : ``
                                    } 
                                    ${
                                      el.level === 'Продвинутый'
                                        ? `
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level "></i>                       
                                    `
                                        : ``
                                    } 
                                    ${
                                      el.level === 'Профессиональный'
                                        ? `
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                        <i class="sidebar--item-level active"></i>
                                    ` : ``}
                                    </span>
            </li>
            `
      }).join('')}
        </ul>
        ` : ``}
    </div>


</aside>

<section class="sections">

    <div class="section--name">
        <h1>
            ${CreateDataDto.firstName} ${CreateDataDto.lastName}
        </h1>
    </div>

    ${CreateDataDto.profilesForm.length !== 0 ? `
    <div class="section">
        <div class="section--title">
            <h2>
                <hr>
                <span> Профиль </span>
            </h2>
        </div>
        <div class="section--content section--content-single-textarea">
        ${CreateDataDto.profilesForm.map((el) => {
        return `
            <p>${el.description ? el.description : ''}</p>
            `
      }).join('')}
          </div>
    </div>
    `
      : ``}

    ${CreateDataDto.experiencesForm.length !== 0 ? `
    <div class="section">
        <div class="section--title">
            <h2>
                <hr>
                <span>Опыт работы</span>
            </h2>
        </div>
        <div class="section--time-line-overlay"></div>
        <ol class="section--list">
        ${CreateDataDto.experiencesForm.map((el) => {
        return `
            <li class="section--item">
                <div class="section--time-line">
                    <i class="section--time-line-dot"></i>
                </div>
                <div class="section--time-line-hide-overlay"></div>
                <div class="section--heading-group">
                    <div class="section--date">${el.dateBegin ? el.dateBegin : ''} - ${el.dateFinish ? el.dateFinish : 'по Н.В.'}</div>
                    <div class="section--heading">
                        <h3>${el.position ? el.position : ''}</h3>
                    </div>
                    <div class="section--sub-heading">
                    ${el.employer ? el.employer + ',' : ''} ${el.city ? el.city : ''}
                    </div>
                </div>
                <div class="section--content">
                    <p>${el.description ? el.description : ''}</p>
                </div>
            </li>
            `
      }).join('')}
        </ol>
    </div>
    `
      : ``}

    ${CreateDataDto.coursesForm.length !== 0 ? `
    <div class="section">
        <div class="section--title">
            <h2>
                <hr>
                <span> Образование и квалификации </span>
            </h2>
        </div>
        <div class="section--time-line-overlay"></div>
        <ol class="section--list">
        ${CreateDataDto.coursesForm.map((el) => {
        return `
            <li class="section--item">
                <div class="section--time-line">
                    <i class="section--time-line-dot"></i>
                </div>
                <div class="section--time-line-hide-overlay"></div>
                <div class="section--heading-group">
                    <div class="section--date">
                    ${el.dateBegin ? el.dateBegin : ''}
                    </div>
                    <div class="section--heading">
                        <h3>${el.degree ? el.degree : ''}</h3>
                    </div>
                    <div class="section--sub-heading">
                    ${el.institution ? el.institution + ',' : ''} ${el.city ? el.city : ''}
                    </div>
                </div>
                <div class="section--content">
                    <p>${el.description ? el.description : ''}</p>
                </div>
            </li>
            `;
      }).join('')}
        </ol>
    </div>
    `
      : ``}

    ${CreateDataDto.recForm.length !== 0 ? `
    <div class="section">
        <div class="section--title">
            <h2>
                <hr>
                <span>Рекомендации</span>
            </h2>
        </div>
        <div class="section--content section--content-single-textarea">
        ${CreateDataDto.recForm.map((el) => {
        return `
            <p>${el.namecompany ? el.namecompany + ',' : ''} ${el.contactperson ? el.contactperson : ''}</p>
            <p>${el.number ? el.number + ',' : ''} ${el.email ? el.email : ''}</p>
            `;
      }).join('')}
          </div>
    </div>
    `
      : ``}

    ${CreateDataDto.skillsForm.length !== 0 ? `
    <div class="section">
        <div class="section--title">
            <h2>
                <hr>
                <span>Навыки</span>
            </h2>
        </div>
        <ol class="section--list skills">
        ${CreateDataDto.skillsForm.map((el) => {
        return `
            <li class="section--item skills">
                <div class="skills--label">
                    <h3>${el.skill ? el.skill : ''}</h3>
                </div>
                <div class="skills--stars">

                ${el.level === '1' ? `
                <i class="skills--level active"></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>
                `
            : ``}
                ${el.level === '2' ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>
                <i class="skills--level "></i>
                `
            : ``}
                ${el.level === '3' ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level "></i>
                    <i class="skills--level "></i>
                `
            : ``}
                ${el.level === '4' ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level "></i>
                `
            : ``}
                ${el.level === '5' ? `
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                    <i class="skills--level active"></i>
                `
            : ``}
                </div>
            </li>
            `
      }).join('')}
        </ol>
    </div>
    `
      : ``}

</section>

<div id="mountHere"></div>
</body>
</html>`
};
