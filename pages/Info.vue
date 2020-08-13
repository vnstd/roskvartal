<template>
  <main>
    <div class="container-information">
      <div class="page">
        <nuxt-link to="/" >
          <img src="https://176428.selcdn.ru/MyApartment/myapartment-logo-full.jpg" alt="Моя Квартира" width="212">
        </nuxt-link>
        <Nuxt />
      </div>
    </div>
  </main>
</template>

<script>

</script>

<style>
  .container-information {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 960px;
  }
  .container-information .illustration{
    width: 230px;
    display: flex;
    margin: 20px auto;
  }
  .container-information .page {
    margin: 30px 0;
    padding: 30px 50px;
    background-color: #fff;
    box-shadow: 0 0 20px -3px;
  }
  .container-information .headline {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin-top: 60px;
  }
  .container-information h3{
    text-align: center;
  }

  .container-information .text-align-justify .article-content {
    text-align: justify;
  }
  .container-information .article-content {
    line-height: 1.5em;
    font-size: 16px;
    margin-top: 30px;
    color: #333;
  }
  .container-information .counter-paragraph {
    counter-increment: paragraph;
  }
  .container-information .counter-paragraph::before {
    content: counter(paragraph) ".";
  }
  .container-information p {
    display: block;
    margin: 24px 0;
  }
  .container-information .link {
    color: #0f6cbc;
    text-decoration: none;
  }
  .container-information .avoid-wrap {
    display: inline-block;
  }
  .container-information ul, ol {
    margin: 0;
    padding: 0;
    list-style-position: inside;
  }
  .container-information ul li, ol li {
    margin-top: 8px;
    margin-bottom: 8px;
  }

</style>
