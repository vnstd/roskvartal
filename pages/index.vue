<template>
  <div>
    <Navbar />
    <main class="content">
      <div class="brief-info-wrapper mobile-img">
        <div class="brief-info">
          <h1 class="brief-info-title">
            Приложение для решения текущих вопросов по дому онлайн
          </h1>
          <p class="brief-info-text">
            Поможет решить проблемы жителей дома в режиме реального времени, без дополнительных визитов и звонков в управляющую организацию
          </p>
          <div class="btn-group">
            <a class="btn-connect" href="/">Попробовать бесплатно</a>
            <a class="btn-google-play-wrapper" href="https://play.google.com/store/apps/details?id=ru.roskvartal.myapartment">
              <img class="btn-google-play" alt="Доступно в Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/ru_badge_web_generic.png">
            </a>
          </div>
        </div>
      </div>

      <div class="container benefits-wrapper">
        <div class="benefits">
          <div class="benefit-group">
            <div class="bg-white-circle">
              <img class="icon" src="https://176428.selcdn.ru/MyApartment/landing/003-mails.svg">
            </div>
            <div class="benefit-title">Информационная система</div>
            <div class="benefit-text">для улучшения коммуникации<br>между жителями МКД<br>и управляющей организацией</div>
          </div>
          <div class="benefit-group">
            <div class="bg-white-circle">
              <img class="icon" src="https://176428.selcdn.ru/MyApartment/landing/002-multiple-users.svg">
            </div>
            <div class="benefit-title">Обменивайтесь</div>
            <div class="benefit-text">с жителями МКД информацией<br>и оперативно решайте вопросы<br>управления МКД</div>
          </div>
          <div class="benefit-group">
            <div class="bg-white-circle">
              <img class="icon" src="https://176428.selcdn.ru/MyApartment/landing/001-conversation.svg">
            </div>
            <div class="benefit-title">Общайтесь</div>
            <div class="benefit-text">с управляющей организацией<br>и ТСЖ, участвуйте в управлении<br>своим домом</div>
          </div>
        </div>
      </div>

      <div class="who-can-use-wrapper">
        <div class="who-can-use">
          <div class="main-title">кто может пользоваться</div>
          <div class="users">
            <div class="users-img"></div>
            <div class="users-bar"></div>
          </div>
        </div>
        <div class="container-wrapper mkd-container">
          <div class="mkd-img-container">
            <img class="mkd" src="https://176428.selcdn.ru/MyApartment/landing/img_mnogokvartir.svg">
          </div>
          <div class="container-info">
            <div class="title">Жители многоквартирных домов</div>
            <ul>
              <li>Получение сведений о квартире, доме, лицевом счёте и управляющей организации
              </li><li>Отправка обращений или вопроса в управляющую организацию, ТСЖ или ЖСК
            </li><li>Передача показаний счётчиков
            </li><li>Вызов аварийной службы
            </li><li>Запись на приём к руководителю управляющей организации
            </li><li>Новости дома и района
            </li><li>Публикация объявлений для жителей вашего дома
            </li><li>Отправка заявок на устранение проблемы и оценка качества её выполнения
            </li><li>Организация совместных мероприятий с управляющей организацией
            </li>
            </ul>
            <a class="btn-connect" href="/">Зарегистрировать личный кабинет</a>
          </div>
        </div>
        <div class="container-wrapper uo-tsj-container">
          <div class="container-info">
            <div class="title">Управляющие организации и ТСЖ</div>
            <ul>
              <li>Быстрое и надёжное информирование жителей МКД
              </li><li>Работа с обращениями
            </li><li>Возможность прикрепления фото- и видеоматериалов
            </li><li>Получение заявок на выполнение работ
            </li><li>Обратная связь от жителей МКД
            </li><li>Контроль потребления коммуналных ресурсов
            </li><li>Предложение дополнительных платных услуг УО
            </li><li>Размещение новостей и отчётов
            </li><li>Автоматическая синхронизация вашего сайта с ГИС ЖКХ
            </li><li>Приём оплаты за ЖКУ
            </li>
            </ul>
            <a class="btn-connect" href="/">Зарегистрироваться</a>
          </div>
          <div class="uo-tsj-img-container">
            <img class="uo-tsj" src="https://176428.selcdn.ru/MyApartment/landing/img_upr_company.svg">
          </div>
        </div>
      </div>
    </main>
    <LandingFooter/>
  </div>
</template>

<script>
  import Navbar from "~/components/Navbar";
  import LandingFooter from "~/components/LandingFooter";
  import Info from "~/pages/Info";
  export default {
    components: {
      LandingFooter,
      Navbar,
      Info
    }
  }
</script>

<style>
  .mobile-img {
    background: url('https://myapartment.roskvartal.ru/ClientApp/assets/images/background.jpg');
    z-index: -1;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;
  }
  .brief-info-wrapper{
    min-height: 400px;
    color: #333;
    padding: 55px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .brief-info{
    grid-area: 1/1/1/1;
    margin: 0 25%;
  }
  .brief-info-title{
    font-family: "PT Serif", serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 43px;
    width: calc(70vw - 200px);
    max-width: 640px;
    margin-bottom: 20px;
  }
  .brief-info-text{
    font-size: 21px;
    line-height: 26px;
    width: calc(50vw - 200px);
    max-width: 512px;
    margin-bottom: 20px;
  }
  .btn-group{
    display: flex;
    align-items: center;
  }
  .btn-google-play-wrapper{
    height: 76px;
  }
  .btn-connect{
    text-transform: uppercase;
    min-width: 240px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    text-decoration: none;
    height: 50px;
    line-height: 50px;
    padding: 0 28px;
    background-color: #e12351;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
  }
  .btn-google-play{
    width: 196px;
    height: 76px;
  }
  @media screen and (max-width: 1440px) {
    .brief-info{
      margin: 0 100px;
    }
    .uo-tsj {
      height: 546px;
      margin: 0 -150px 0 25px;
    }
  }
  @media screen and (min-width: 1440px) {
    .uo-tsj {
      height: 546px;
      margin: 0 -25px 0 25px;
    }
  }

  @media screen and (max-width: 900px) {
    .mobile-img{
      background-size: 1395px;
    }
    .brief-info{
      margin: 0 25px;
    }
    .brief-info-wrapper{
      padding: 20px;
      grid-template-columns: 1fr;
    }
    .brief-info-title{
      width: calc(100vw - 50px)
    }
    .brief-info-text {
      width: calc(50vw - 50px);
    }
    .btn-group{
      flex-direction: column;
      align-items: start;

    }
    .btn-google-play{
      margin-left: -13px;
    }

    .uo-tsj-img-container, .mkd-img-container {
      display: none;
    }
    .container-wrapper{
      margin: 32px 56px;
      display: flex;
    }
  }
  @media screen and (min-width: 900px){
    .container-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 32px 0;
    }
  }

  .benefits-wrapper {
    min-height: 512px;
    background: #009cde;
    background-image: radial-gradient( circle farthest-side at center bottom, #0091d7, #004094 100% );
    color: #fff;
  }
  .benefits-wrapper .benefits {
    display: flex;
    align-items: center;

    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    margin-top: 85px;
    margin-bottom: 85px;
  }

  .benefit-group {
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    flex-direction: column;
    margin: 25px;
  }
  .bg-white-circle {
    height: 92px;
    width: 92px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
  .bg-white-circle .icon {
    height: 53px;
  }
  .benefit-title {
    font-size: 26px;
    margin: 18px 0 8px;
    text-align: center;
  }
  .benefit-text {
    font-size: 19px;
    text-align: center;
    line-height: 26px;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .who-can-use {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .who-can-use .users {
    width: 100%;
    height: 44px;
    position: relative;
    max-width: 540px;
    margin-bottom: 25px;
  }
  .who-can-use .users-img {
    background: url('https://myapartment.roskvartal.ru/ClientApp/assets/images/users-solid.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 44px;
    width: 100px;
    margin-top: 13px;
    position: absolute;
    z-index: 3;
    left: 50%;
    margin-left: -50px;
    background-color: #fff;
  }
  .who-can-use .users-bar {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: #de2b41;
    position: absolute;
    z-index: 2;
    top: 38px;
  }
  .who-can-use .main-title {
    font-size: 34px;
    text-transform: uppercase;
    font-weight: 700;
    color: #333;
    margin-top: 76px;
    text-align: center;
    width: 100%;
  }
  .who-can-use-wrapper{
    display: flex;
    flex-direction: column;
  }
  .container-info{
    display: flex;
    flex-direction: column;
  }
  .container-info .btn-connect{
    margin: 32px 0 0 0;
    width: 50%;
  }
  .mkd {
    height: 676px;
    width: 331px;
    margin: 0 45px;
  }
  .title {
    font-size: 27px;
    color: #046ab4;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .container-info ul {
    list-style: none;
  }
  .container-info ul>li {
    margin-left: -20px!important;
  }

  .container-info ul>li {
    list-style: none;
    font-size: 18px;
    line-height: 33px;
    padding-left: 20px;
  }
  .container-info ul>li:before {
    content: "—";
  }
  .uo-tsj-img-container {
    overflow-x: hidden;
    min-width: 430px;
  }


</style>
