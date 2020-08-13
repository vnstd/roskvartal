<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-menu">
        <div class="menu-logo">
          <nuxt-link class="logo-wrapper" to="/">
            <div class="logo-icon"/>
            <div class="logo-text">Моя Квартира</div>
          </nuxt-link>
        </div>
        <div class="menu-items" :class="!menuToggle && 'hidden-900'">
          <div class="menu-links">
            <div class="item">
              <nuxt-link to="/info/rules">
                <span>Правила</span>
                <i class="fas fa-exclamation-circle"></i>
              </nuxt-link>
            </div>
            <div class="item">
              <nuxt-link to="/info/instruction">
                <span>Инструкция</span>
                <i class="fas fa-question-circle"></i>
              </nuxt-link>
            </div>
            <div class="item">
              <nuxt-link to="/info/agreement">
                <span>Соглашение</span>
                <i class="fas fa-handshake"></i>
              </nuxt-link>
            </div>
          </div>
          <div class="menu-button-wrapper">
            <a class="menu-button" href="/">
              <span class="text">Войти</span>
            </a>
          </div>
          <a class="menu-button-600" href="/">
            <i class="fas fa-sign-in-alt"></i>
          </a>
        </div>
        <div class="menu-icon" @click="menuToggle = !menuToggle">
          <div class="icon-part"></div>
          <div class="icon-part"></div>
          <div class="icon-part"></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Navbar",
    data(){
      return {
        menuToggle: false
      }
    }
  }
</script>

<style scoped>
  .header, .navbar{
    background: #FFF;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,.14);
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-height: 80px;
    font-family: PT Sans,sans-serif !important;
  }
  .header .navbar .navbar-menu {
    min-height: 80px;
    height: 80px;
    display: flex;
    align-items: center;

    padding: 0 32px;
    justify-content: space-between;
  }
  .header .navbar .navbar-menu .menu-logo {
    margin-right: 32px;
    display: flex;
  }
  .logo-wrapper {
    display: flex;
    align-items: center;
  }
  .logo-icon {
    background-image: url(//176428.selcdn.ru/RosKvartal.CDN/Portal.Web/images/service-icon5.png);
    background-repeat: no-repeat;
    display: inline-block;
    background-size: 200px;
    background-position: -80px -240px;
    width: 40px;
    height: 40px;
    margin-left: -8px;
    margin-right: 10px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 24px;
    color: #333;
    letter-spacing: -0.5px;
    margin-right: -10px;
  }
  .menu-items{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
  }
  .menu-items .menu-links {
    display: flex;
    align-items: center;
  }
  .menu-items .menu-links .item {
    width: auto;
    position: relative;
    margin-left: 32px;
    cursor: pointer;
  }
  .menu-links .item a {
    color: #333;
    font-size: 16px;
  }

  .menu-button-wrapper{
    background-image: linear-gradient(90deg,#1f56ee,#0078c3);
    width: 148px;
    height: 48px;
    margin: 0 0 0 32px;
    border-radius: 24px;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-button{
    width: 146px;
    height: 46px;
    border-radius: 22px;
    background: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    color: #333;
    text-transform: uppercase;
  }
  .menu-button:hover{
    background: transparent;
    color: #fff;
    transition: max-height .2s ease-out,background .2s ease-out,transform .5s ease-out;
  }

  .menu-icon {
    display: none;
    cursor: pointer;
  }
  .icon-part {
    width: 25px;
    height: 3px;
    background-color: #1f56ee;
    margin: 5px 0;
    background-image: linear-gradient(90deg, #1f56ee, #0078c3);
  }
  .hidden-900{
    display: flex;
  }
  .menu-button-600{
    display: none;
  }
  .menu-links .item svg{
    display: none;
  }

  @media screen and (max-width: 900px) {
    .hidden-900{
      display: none;
    }
    .menu-icon{
      display: block;
    }
    .menu-items{
      padding: 0 32px 0 0!important;
      position: absolute;
      top: 80px;
      left: 0;
      height: 80px;
      width: 100%;
      background-color: #eff9ff;
    }
    .menu-button-wrapper{
      margin: 0 32px 0 0;
    }
  }
  @media screen and (max-width: 600px) {
    .menu-links .item span{
      display: none;
    }
    .menu-button-wrapper{
      display: none;
    }
    .menu-button-600{
      display: flex;
      margin: 0 32px 0 0;
      color: #1f56ee;
      font-size: 25px;
    }
    .menu-links .item svg{
      display: block;
    }
  }

</style>
