export default ({
                    email,
                    firstName,
                    lastName,
                    birthDate,
                    sex,
                    phoneNumber,
                    postAdr,
                    postIndex,
                    city,
                    placeOfBirth,
                    familyStatus,
                    citizenship,
                    linkedIn,
                    website,
                }) => {
    const today = new Date();
    return `
    <html lang="ru">
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
            letter-spacing: 0.08em;
            text-transform: uppercase;
            font-style: normal;
            font-size: 30px;
            margin: 0;
            padding: 16px 0 24px 0;
            font-weight: 600;
        }

        h1 span {
            position: relative;
            font-style: normal;
            display: inline;
            margin-right: 3px;
            padding: 0;
        }

        h2 {
            text-transform: uppercase;
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
        }

        p {
            color: #4c4c4c;
            line-height: 18px;
            font-weight: 400;
            margin: 0;
            padding: 0;
        }

        hr {
            border: none;
            height: 1px;
            width: 100%;
            padding: 0;
            margin: 0;
            background: #d2d2d2;
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
            top: -10px;
            margin-bottom: 10px;
        }

        .section--title {
            display: inline-block;
            position: relative;
            width: 100%;
            z-index: 99;
            margin: 0 0 0 0;
            font-weight: 600;
            background: #fff;
            padding: 19px 0 10px 10px;
            border-top: 1px solid #d2d2d2;
            page-break-inside: avoid;
        }

        .section--title span {
            display: inline-block;
            margin-right: 2px;
        }

        .section--title-icon {
            position: relative;
            top: 0px;
            display: inline-block;
            height: 32px;
            width: 32px;
            margin-left: -15px;
            margin-right: 10px;
            border-radius: 50%;
            border: 1px solid #2b2b38;
        }

        .section--title-icon svg {
            position: relative;
            top: 3px;
            left: 4px;
            height: 20px;
            width: 20px;
            fill: #2b2b38;
        }

        .section--title-icon.education svg {
            top: 4px;
            left: 4px;
        }

        .section--title-icon.course svg {
            top: 5px;
            left: 5px;
        }

        .section--title-icon.work svg {
            top: 4px;
            left: 5px;
        }

        .section--title-icon.internships svg {
            top: 4px;
            left: 5px;
        }

        .section--title-icon.certificate svg {
            top: 4px;
            left: 5px;
        }

        .section--title-icon.single-textarea svg {
            top: 4px;
            left: 5px;
        }

        .section--title-icon.extra-curricular svg {
            top: 4px;
            left: 5px;
        }

        .section--title-icon.characteristic svg {
            top: 4px;
            left: 5px;
        }

        .section--title-icon.skill svg {
            top: 4px;
            left: 5px;
        }

        .section--title-icon.hobby svg {
            top: 5px;
            left: 5px;
        }

        .section--title-icon.language svg {
            top: 5px;
            left: 5px;
        }

        .section--title-icon.reference svg {
            top: 5px;
            left: 5px;
        }

        .section--time-line-overlay {
            position: absolute;
            top: 0;
            left: 10px;
            height: 100%;
            width: 1px;
            background: #2b2b38;
        }

        .section--time-line {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 1px;
            background: #2b2b38;
        }

        .section--time-line-hide-overlay {
            display: none;
            position: absolute;
            left: -5px;
            top: 25px;
            width: 10px;
            height: 100%;
            background: #fff;
            z-index: 9;
        }

        .section.references .section--time-line-dot {
            top: 15px;
        }

        .section.references .section--date {
            top: 10px;
        }

        .section.references .section--time-line-hide-overlay {
            height: 95%;
        }

        .section--item:last-child {
            background: #fff;
            padding-bottom: 15px;
        }

        .section--item:last-child .section--time-line {
            height: 30px;
        }

        .section--item:last-child .section--time-line-hide-overlay {
            display: inline;
        }

        .section:last-child .section--item:last-child {
            padding-bottom: 0;
        }

        /*.section:last-child .section--item:last-child .section--heading-group {
            padding-bottom: 0;
        }*/

        .section--time-line-dot {
            position: absolute;
            left: -3px;
            top: 18px;
            height: 12px;
            width: 10px;
            z-index: 999;
            /* fill: red; */
            /* height: 9px;
            width: 9px; */
            /* border-radius: 50%; */
            /* background: #fff; */
            /* border: 1px solid #2b2b38; */
            /* border: 0.1em solid #2b2b38; */
        }

        .section--heading-group {
            display: block;
            margin: 0;
            padding: 0 0 6px 0;
            page-break-inside: avoid !important;
        }

        .section--list {
            display: block;
            list-style: none;
            padding: 0 0 0 10px;
            margin: 0;
        }

        .section--list.skills {
            margin-bottom: 20px;
        }

        .section--list.no-indent .section--item {
            padding-left: 20px;
        }

        .section--item {
            display: block;
            position: relative;
            list-style: none;
            padding: 0 0 0 170px;
            margin: 0;
        }

        .section--item.skills {
            display: inline-block;
            padding-top: 5px;
            padding-bottom: 0px;
            width: 100%;
            margin: 0;
            padding-left: 25px;
            border-left: 1px solid #2b2b38;
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
            margin: 0 0 0 -5px;
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
            left: 20px;
            top: 12px;
            width: 140px;
            font-size: 13px;
            padding: 0;
            margin: 0;
        }

        .section--heading {
            display: block;
            padding: 10px 0 0 0;
            margin: 0;
        }

        .section--sub-heading {
            display: block;
            padding: 0;
            margin: 0;
            color: #a43d46;
            font-size: 13px;
        }

        .section--content {
            display: block;
            padding: 0;
            margin: 0;
        }

        .section--content p {
            display: block;
        }

        .section--content ul, .section--content ol {
            page-break-inside: auto;
            white-space: normal;
            font-weight: 400;
            list-style-position: outside;
            color: #4c4c4c;
            margin: 0;
            padding: 0 0 0 16px;
        }

        .section--content ul li, .section--content ol li {
            line-height: 18px;
        }

        .section--content ul li {
            list-style-type: disc;
        }

        .section--content ol {
            padding-left: 14px;
        }

        .section--content-single-textarea {
            padding-bottom: 10px;
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
            position: fixed;
            z-index: 1;
            color: #fff;
            padding: 25px 0 0 14px;
            width: 215px;
            height: auto;
        }

        .avatar--bg {
            left: -10px;
            top: -70px;
            position: fixed;
            z-index: 0;
            margin: 0;
            padding: 0;
            background: #a43d47;
            width: 225px;
            height: 270px;
            display: none;
        }

        .avatar {
            position: relative;
            display: inline-block;
            z-index: 2;
            padding: 0;
            margin: 0 0 0 9px;
            height: 155px;
            width: 155px;
            border-radius: 50%;
            background-size: cover !important;
            border: 2px solid #fff;
        }

        .sidebar--data {
            display: block;
        }

        .sidebar--title {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            position: relative;
            width: 88%;
            padding: 20px 0 5px 0;
            margin: 0 0 0 0;
            page-break-inside: avoid;
            letter-spacing: 0.08em;
        }

        .sidebar--title span {
            display: inline-block;
            width: 100%;
            margin: 0;
            padding: 0;
            font-weight: 600;
            font-style: normal;
            padding-right: 2px;
            z-index: 1;
            background: #607d8b;
        }

        .sidebar--title span:last-child {
            padding-right: 10px;
        }

        .sidebar--title hr {
            position: absolute;
            left: 0;
            bottom: 18px;
            border: none;
            height: 1px;
            width: calc(100% - 10px);
            background: #fff;
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
            position: relative;
            font-size: 12px;
            margin: 0;
            padding: 0 5px 5px 0;
        }

        .sidebar--item.sidebar--item-personal {
            padding: 0 5px 5px 23px;
        }

        .sidebar--item.sidebar--item-interest {
            padding-left: 12px;
            padding-bottom: 0;
        }

        .sidebar--item:last-child {
            padding-bottom: 0;
        }

        .sidebar--icon-square {
            display: inline-block;
            height: 5px;
            width: 5px;
            position: absolute;
            top: 9px;
            margin: 0 5px 0 0;
            background: #fff;
            left: 0;
        }

        .sidebar--item-icon {
            top: 2px;
            left: -8px;
            position: absolute;
            fill: #fff;
            height: 15px;
        }

        .sidebar--item-text {
            line-height: 21px;
        }

        .sidebar--item-align-right {
            float: right;
            margin-right: 10px;
        }

        /*** START --- UPDATE COLOR ***/
        .c--434a54 .sidebar--bg,
        .c--434a54 .sidebar--title span {
            background: #434a54 !important;
        }

        .c--434a54 .section--sub-heading {
            color: #757575;
        }

        .c--434a54 .skills--stars svg {
            fill: #434a54 !important;
        }

        .c--434a54 .skills--stars svg:not(.active) {
            fill: #b4b7bb !important;
        }

        .c--da4453 .sidebar--bg,
        .c--da4453 .sidebar--title span {
            background: #da4453 !important;
        }

        .c--da4453 .section--sub-heading {
            color: #a43d46;
        }

        .c--da4453 .skills--stars svg {
            fill: #da4453 !important;
        }

        .c--da4453 .skills--stars svg:not(.active) {
            fill: #f0b4ba !important;
        }

        .c--3f6592 .sidebar--bg,
        .c--3f6592 .sidebar--title span {
            background: #3f6592 !important;
        }

        .c--3f6592 .section--sub-heading {
            color: #3f6592;
        }

        .c--3f6592 .skills--stars svg {
            fill: #3f6592 !important;
        }

        .c--3f6592 .skills--stars svg:not(.active) {
            fill: #b2c2d4 !important;
        }

        .c--f1b230 .sidebar--bg,
        .c--f1b230 .sidebar--title span {
            background: #f1b230 !important;
        }

        .c--f1b230 .section--sub-heading {
            color: #986c14;
        }

        .c--f1b230 .skills--stars svg {
            fill: #f1b230 !important;
        }

        .c--f1b230 .skills--stars svg:not(.active) {
            fill: #f9e0b0 !important;
        }

        .c--37bc9b .sidebar--bg,
        .c--37bc9b .sidebar--title span {
            background: #37bc9b !important;
        }

        .c--37bc9b .section--sub-heading {
            color: #187d64;
        }

        .c--37bc9b .skills--stars svg {
            fill: #37bc9b !important;
        }

        .c--37bc9b .skills--stars svg:not(.active) {
            fill: #b0e4d7 !important;
        }

        /*** END --- UPDATE COLOR ***/

        html[lang=tr] body {
            font-family: "Helvetica";
        }

        html[lang=tr] .section--date {
            font-size: 12px;
            width: 130px;
        }

        html[lang=tr] .sidebar--item {
            line-height: 18px;
        }

        /*strong { white-space: nowrap; }*/
    </style>
</head>
<body class="c--3f6592" style="overflow: hidden !important;">
<div class="sidebar--bg"></div>
<aside class="sidebar">
    <div class="sidebar--data">
        <h2 class="sidebar--title">
            <span>Личные данные</span>
        </h2>
        <ul class="sidebar--list">
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span class="sidebar--label">Имя</span><br>
                ${firstName}
            </li>

            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span class="sidebar--label">Адрес</span><br>
                ${postAdr}
            </li>


            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                </svg>
                <span class="sidebar--label">Номер телефона</span><br>
                ${phoneNumber}
            </li>
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span class="sidebar--label">Email</span><br>
                ${email}
            </li>
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span class="sidebar--label">Дата рождения</span><br>
                ${birthDate}
            </li>
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"></path>
                </svg>
                <span class="sidebar--label">Пол</span><br>
                ${sex}
            </li>
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span class="sidebar--label">Гражданство</span><br>
                ${citizenship}
            </li>
            <li class="sidebar--item sidebar--item-personal">
                <svg class="sidebar--item-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                </svg>
                <span class="sidebar--label">LinkedIn</span><br>
                ${linkedIn}
            </li>
        </ul>
    </div>
</aside>
<section class="sections">
    <div class="section--name">
        <h1>
            Тут про работу
        </h1>
    </div>
    <div class="section">
        <div class="section section--summary">
            <div class="section--content">
                <p>Лалал</p>
            </div>
        </div>
    </div>
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
        <div class="section--time-line-overlay"></div>
        <ol class="section--list">
            <li class="section--item">
                <div class="section--time-line">
                    <svg class="section--time-line-dot">
                        <circle cx="4" cy="4" r="3" stroke="black" stroke-width="1" fill="white"></circle>
                    </svg>
                </div>
                <div class="section--time-line-hide-overlay"></div>
                <div class="section--heading-group">
                    <div class="section--date">июл 2019 - июн 2018</div>
                    <div class="section--heading">
                        <h3>пока ничего не подставил</h3>
                    </div>
                    <div class="section--sub-heading">
                        пока ничего не подставил
                    </div>
                </div>
                <div class="section--content">
                    <p>пока ничего не подставил</p>
                </div>
            </li>
        </ol>
    </div>
</section>
<div id="mountHere"></div>
</body>
</html>
    `;
};