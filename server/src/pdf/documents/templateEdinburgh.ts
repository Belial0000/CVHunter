import { CreateDataDto } from '../dto/create-data.dto';

export default (CreateDataDto) => {
    const today = new Date();
    return `<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <!-- fonts -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet">
    <!-- ./fonts -->


    <style>
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
            font: 12px "Helvetica", Arial;
            font-style: normal
        }

        h1 {
            position: relative;
            z-index: 999;
            text-align: center;
            text-transform: uppercase;
            width: 100%;
            font-style: normal;
            font-size: 21px;

            letter-spacing: .05em;
            color: #fff;
            margin: 0;
            padding: 35px 70px 15px 70px;
            font-weight: 600
        }

        h1 span {
            position: relative;
            font-style: normal;
            display: inline;
            margin-right: 3px;
            padding: 0
        }

        .avatar--no h1 {
            margin-top: 35px
        }

        h2 {
            letter-spacing: .1em;
            font-size: 16px;
            font-weight: 600;
            margin: 0;
            padding: 0
        }

        h3 {
            font-size: 13px;
            font-weight: 600;
            margin: 0;
            padding: 0;
            max-width: 375px
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
            top: 0;
            left: 275px;
            padding-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            position: relative;
            width: 520px;
            min-height: 500px;
            background: #fff
        }

        .section {
            position: relative;
            width: 100%;
            padding: 0
        }

        .section:nth-child(1) .section--title {
            padding-top: 0;
            border: none
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
            margin-bottom: 22px
        }

        .section--title {
            display: inline-block;
            position: relative;
            width: 100%;
            z-index: 99;
            margin: 0;
            font-weight: 600;
            background: #fff;
            padding: 19px 0 0 3px;
            border-top: 1px solid #d2d2d2;
            page-break-inside: avoid
        }

        .section--title span {
            display: inline-block;
            margin-right: 2px
        }

        .section--title-icon {
            position: relative;
            display: none;
            top: 5px;
            left: -2px;
            margin-right: 2px
        }

        .section--title-icon svg {
            height: 22px;
            width: 22px
        }

        .section--item:last-child {
            background: #fff;
            padding-bottom: 15px
        }

        .section--item:last-child .section--time-line {
            height: 30px
        }

        .section--heading-group {
            display: block;
            margin: 0;
            padding: 0 0 6px 0;
            page-break-inside: avoid !important
        }

        .section--list {
            display: block;
            list-style: none;
            padding: 0;
            margin: 0
        }

        .section--list.skills {
            padding-top: 10px;
            margin-bottom: 20px
        }

        .section--list.no-indent .section--item {
            padding-left: 4px
        }

        .section--item {
            display: block;
            position: relative;
            list-style: none;
            padding: 0 0 0 4px;
            margin: 0
        }

        .section--item.skills {
            display: inline-block;
            padding-top: 5px;
            padding-bottom: 0;
            width: 100%;
            margin: 0;
            padding-left: 10px
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
            position: absolute;
            top: 50%;
            margin-top: -7px
        }

        .skills--stars svg {
            fill: #b1b1b1
        }

        .skills--stars svg.active {
            fill: #2b2b38
        }

        .section--date {
            position: absolute;
            right: 0;
            top: 12px;
            width: 142px;
            text-align: right;

            font-size: 12px;
            padding: 0;
            margin: 0
        }

        .section--heading {
            display: block;
            padding: 10px 0 0 0;
            margin: 0
        }

        .section--sub-heading {
            display: block;
            padding: 0;
            margin: 0;
            font-size: 12px;
        }

        .section--content {
            display: block;
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
            padding-top: 10px;
            padding-left: 4px;
            padding-bottom: 20px
        }

        .sidebar--bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 275px;
            background: #e9e9e9;
            height: 18000px;
            overflow-x: hidden;
            overflow-y: hidden
        }

        .sidebar--shadow {
            position: fixed;
            top: 0;
            left: 275px;
            width: 10px;
            background: #fff;
            height: 18000px;
            overflow-x: hidden;
            overflow-y: hidden;
            -webkit-box-shadow: 0 0 9px 1px rgba(0, 0, 0, .09);
            box-shadow: 0 0 9px 1px rgba(0, 0, 0, .09)
        }

        .sidebar--shadow-overlay {
            position: fixed;
            top: 0;
            left: 278px;
            width: 500px;
            background: #fff;
            height: 18000px;
            overflow-x: hidden;
            overflow-y: hidden
        }

        .sidebar {
            left: 0;
            position: fixed;
            z-index: 0;
            padding: 20px 0 0 20px;
            width: 275px;
            height: auto
        }

        .avatar__bg {
            position: relative;
            left: -120px;
            padding: 100px 30px 60px 30px;
            margin: -150px 0 0 0;
            width: 475px;
            height: auto;
            min-height: 250px;
            border-radius: 50%;
            border: 10px solid #505476
        }

        .avatar--no .avatar__bg {
            padding-bottom: 0;
            margin-top: -180px
        }

        .avatar {
            position: relative;
            z-index: 99;
            display: inline-block;
            padding: 0;
            margin: -65px 0 0 63px;
            height: 115px;
            width: 115px;
            border-radius: 50%;
            -webkit-background-size: cover !important;
            background-size: cover !important;
            background-color: #fff;
            border: 4px solid #fff
        }

        .sidebar--data {
            display: block
        }

        .sidebar--title {
            font-style: normal;
            position: relative;
            width: calc(100% + 20px);
            padding: 5px 0 5px 20px;
            margin: 15px 0 5px -20px;
            page-break-inside: avoid
        }

        .sidebar--title span {
            float: left;
            display: inline;
            font-weight: 400;
            font-style: normal;
            padding-right: 2px;
            z-index: 1
        }

        .sidebar--title span:last-child {
            padding-right: 10px
        }

        .sidebar--title hr {
            position: absolute;
            left: 0;
            bottom: 18px;
            border: none;
            height: 1px;
            width: calc(100% - 10px);
            background: #fff
        }

        .sidebar--title svg {
            position: relative;
            top: 4px;
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
            position: relative;
            font-size: 12px;
            margin: 0;
            padding: 0 5px 5px 0
        }

        .sidebar--item.sidebar--item-personal {
            padding: 0 5px 5px 23px
        }

        .sidebar--item.sidebar--item-interest {
            padding-left: 12px;
            padding-bottom: 0
        }

        .sidebar--item:last-child {
            padding-bottom: 0
        }

        .sidebar--icon-square {
            display: inline-block;
            height: 7px;
            width: 7px;
            position: absolute;
            top: 8px;
            margin: 0 5px 0 0;
            background: #333;
            left: 0;
            border-radius: 1px
        }

        .sidebar--item-icon {
            top: 2px;
            left: -8px;
            position: absolute;
            height: 15px
        }

        .sidebar--item-text {
            line-height: 21px
        }

        .sidebar--item-align-right {
            float: right;
            margin-right: 20px
        }

        .skills__list {
            position: relative;
            display: inline-block;
            list-style: none;
            margin: 0;
            padding: 0;
            top: 2px
        }

        /*
        .skills__item {
            display: inline-block;
            height: 9px;
            width: 9px;
            margin: 0 3px 0 0;
            border-radius: 50%;
            opacity: .3;
            background: #333
        }

        .skills__item.active {
            opacity: 1
        }*/

        body .skills__list .skills__item {
            display: inline-block;
            height: 9px;
            width: 9px;
            margin: 0 3px 0 0;
            border-radius: 50%;
        }

        .c--505476 .section--sub-heading {
            color: #505476 !important;
        }

        .c--505476 .section--title-icon svg,
        .c--505476 .sidebar--item-icon {
            fill: #505476 !important;
        }

        .c--505476 .avatar__bg,
        .c--505476 .sidebar--icon-square,
        .c--505476 .skills__item.active {
            background: #505476 !important;
        }

        .c--505476 .skills__item {
            background: #cbccd6;
        }

        .c--505476 .avatar__bg {
            border-color: #2d3260 !important;
        }

        .c--0a95a8 .section--sub-heading {
            color: #077685 !important;
        }

        .c--0a95a8 .section--title-icon svg,
        .c--0a95a8 .sidebar--item-icon {
            fill: #077685 !important;
        }

        .c--0a95a8 .avatar__bg,
        .c--0a95a8 .skills__item.active {
            background: #078899 !important;
        }

        .c--0a95a8 .skills__item {
            background: #aacdd1;
        }

        .c--0a95a8 .sidebar--icon-square {
            background: #077685 !important;
        }

        .c--0a95a8 .avatar__bg {
            border-color: #077685 !important;
        }

        .c--ffc107 .section--sub-heading {
            color: #353535 !important;
        }

        .c--ffc107 .section--title-icon svg,
        .c--ffc107 .sidebar--item-icon {
            fill: #353535 !important;
        }

        .c--ffc107 .avatar__bg,
        .c--ffc107 .skills__item.active {
            background: #353535 !important;
        }

        .c--ffc107 .skills__item {
            background: #b4b4b4;
        }

        .c--ffc107 .sidebar--icon-square {
            background: #353535 !important;
        }

        .c--ffc107 .avatar__bg {
            border-color: #ffc107 !important;
        }

        .c--640707 .section--sub-heading {
            color: #640707 !important;
        }

        .c--640707 .section--title-icon svg,
        .c--640707 .sidebar--item-icon {
            fill: #640707 !important;
        }

        .c--640707 .avatar__bg,
        .c--640707 .skills__item.active {
            background: #640707 !important;
        }

        .c--640707 .skills__item {
            background: #c2a7a6 !important;
        }

        .c--640707 .sidebar--icon-square {
            background: #640707 !important;
        }

        .c--640707 .avatar__bg {
            border-color: #b0292b !important;
        }

        .c--316834 .section--sub-heading {
            color: #204823 !important;
        }

        .c--316834 .section--title-icon svg,
        .c--316834 .sidebar--item-icon {
            fill: #204823 !important;
        }

        .c--316834 .avatar__bg,
        .c--316834 .skills__item.active {
            background: #204823 !important;
        }

        .c--316834 .skills__item {
            background: #adb9ae !important;
        }

        .c--316834 .sidebar--icon-square {
            background: #204823 !important;
        }

        .c--316834 .avatar__bg {
            border-color: #316834 !important;
        }

    </style>

</head>
<body class="c--505476 " style="overflow: hidden !important;">

<div class="sidebar--bg"></div>

<div class="sidebar--shadow"></div>

<div class="sidebar--shadow-overlay"></div>

<aside class="sidebar">

    <div class="avatar__bg">
        <h1> ${CreateDataDto.firstName} ${CreateDataDto.lastName} </h1>
    </div>


    
${CreateDataDto.photo ? `<div class="avatar" style="background:url('http://localhost:5000/users/image/${CreateDataDto.photo}') no-repeat;"></div>` : `<div class="avatar"
         style="background:url('http://localhost:5000/users/image/asd.png') no-repeat;"></div>`}

    <div class="sidebar--data">
        <h2 class="sidebar--title">Личные данные</h2>

        <ul class="sidebar--list">
        ${
        CreateDataDto.city || CreateDataDto.postAdr || CreateDataDto.postIndex
            ? `
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span class="sidebar--label">Адрес</span><br>
                ${CreateDataDto.postAdr} <br>
                ${CreateDataDto.postIndex} ${CreateDataDto.сity}
            </li>
            `
            : ``
    }
            

            ${
        CreateDataDto.phoneNumber
            ? `
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                </svg>
                <span class="sidebar--label">Номер телефона</span><br>
                ${CreateDataDto.phoneNumber}
            </li>
            `
            : ``
    }


            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span class="sidebar--label">Email</span><br>
                ${CreateDataDto.email}
            </li>

            ${
        CreateDataDto.birthDate
            ? `
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span class="sidebar--label">Дата рождения</span><br>
                ${CreateDataDto.birthDate}
            </li>
            `
            : ``
    }

            ${
        CreateDataDto.placeOfBirth
            ? `
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span class="sidebar--label">Место рождения</span><br>
                ${CreateDataDto.placeOfBirth}
            </li>
            `
            : ``
    }

            ${
        CreateDataDto.sex
            ? `
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"></path>
                </svg>
                <span class="sidebar--label">Пол</span><br>
                ${CreateDataDto.sex}
            </li>
            `
            : ``
    }

            ${
        CreateDataDto.citizenship
            ? `
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                </svg>
                <span class="sidebar--label">Гражданство</span><br>
                ${CreateDataDto.citizenship}
            </li>
            `
            : ``
    }

            ${
        CreateDataDto.familyStatus
            ? `
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path>
                </svg>
                <span class="sidebar--label">Семейное положение</span><br>
                ${CreateDataDto.familyStatus}
            </li>
            `
            : ``
    }

            ${
        CreateDataDto.website
            ? `
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>
                </svg>
                <span class="sidebar--label">Веб-сайт</span><br>
                ${CreateDataDto.website}
            </li>
            `
            : ``
    }

            ${
        CreateDataDto.linkedIn
            ? `
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                </svg>
                <span class="sidebar--label">LinkedIn</span><br>
                ${CreateDataDto.linkedIn}
            </li>
            `
            : ``
    }

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
            <li class="sidebar--item sidebar--item-text sidebar--item-interest">
                <i class="sidebar--icon-square"></i>
                ${el.hobby ? el.hobby : ''}
            </li>
            `;
                })
                .join('')}
        </ul>
        `
            : ``
    }
    </div>

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
                <span class="sidebar--item-align-right">
                ${
                        el.level === 'Начальный'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                </ul>
    
                `
                            : ``
                    }
                ${
                        el.level === 'Ниже среднего'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                </ul>
    
                `
                            : ``
                    } ${
                        el.level === 'Средний'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                </ul>
    
                `
                            : ``
                    }
                ${
                        el.level === 'Выше среднего'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                </ul>
    
                `
                            : ``
                    } ${
                        el.level === 'Продвинутый'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item "></li>
                </ul>
    
                `
                            : ``
                    } ${
                        el.level === 'Профессиональный'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                </ul>
    
                `
                            : ``
                    }
                            </span>
            </li>
            `;
                })
                .join('')}
        </ul>
        `
            : ``
    }
    </div>


</aside>

<section class="sections">

${
        CreateDataDto.profilesForm.length !== 0
            ? `
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
                    ${el.dateBegin ? el.dateBegin : ''}
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
        CreateDataDto.recForm.length !== 0
            ? `
    <div class="section">
        <div class="section--title">
            <h2> Рекомендации </h2>
        </div>
        <div class="section--content section--content-single-textarea">
        ${CreateDataDto.recForm
                .map((el) => {
                    return `
        <p>${el.namecompany ? el.namecompany + ',' : ''} ${
                        el.contactperson ? el.contactperson : ''
                    }</p>
        <p>${el.number ? el.number + ',' : ''} ${el.email ? el.email : ''}</p>
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
            <h2> Навыки </h2>
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
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                </ul>

                `
                            : ``
                    }
                ${
                        el.level === '2'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                </ul>

                `
                            : ``
                    }
                ${
                        el.level === '3'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item "></li>
                <li class="skills__item "></li>
                </ul>

                `
                            : ``
                    }
                ${
                        el.level === '4'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item "></li>
                </ul>

                `
                            : ``
                    }
                ${
                        el.level === '5'
                            ? `
                    <ul class="skills__list">
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                <li class="skills__item active"></li>
                </ul>
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
