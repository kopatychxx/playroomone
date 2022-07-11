<template>
  <div class="main" style="padding: 0 5%;">
    <div class="main__landing-header" style="display: flex; justify-content: space-between; align-items: end">
      <div class="main__landing-titles">
        <h1 style="
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
        color: #E83542;"
        >Садок</h1>
        <h3 style="
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        color: #000000;
        margin: -25px 0px 0"
        >2-3 роки</h3>
      </div>
      <p style="
      max-width: 70%;
      font-weight: 400;
      font-size: 20px;
      color: #000000;"
      >У віці від 2 до 3 років з дитиною відбуваються стрімкі зміни, що стосуються кількох сфер. Одна з найважливіших - емоційний розвиток. Діти починають відчувати нові для себе емоції, їм характерно більш імпульсивна та примхлива поведінка. У цьому віці вони лише вчаться висловлювати почуття. І навчаються справлятися із деякими завданнями самостійно.
      </p>
    </div>
    <img src="../assets/program.svg" alt="" style="margin-top: 20px; width: 100%; margin-bottom: 100px;">
    <div class="rows" style="display:flex; flex-direction: column; row-gap: 50px">
      <div class="row" v-for="(row, i) in rows"
           :key="i" style="
           display: flex;
           column-gap: 40px;
            ">
        <img :src="row.img" alt="" width="300px">
        <div class="rowinfo" style="display: flex; flex-direction: column; justify-content: flex-start">
          <h4 style="font-size: 24px; color: #E83542">{{ row.title }}</h4>
          <p style="font-size: 20px">{{ row.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallYearPage',
  data: () => ({
    rows: [
      {
        img: require('../assets/textimg.svg'),
        title: 'Розвиток мовлення',
        text: 'Приблизно до двох років дитина починає будувати речення з 2-3 слів, використовуючи займенники «я», «ти». Діти вчаться говорити по черзі та озвучувати свої потреби, вести діалог.'
      },
      {
        img: require('../assets/textimgtwo.svg'),
        title: 'Мислення',
        text: 'Діти освоюють такі поняття, як час чи протилежність: наприклад, великий — маленький, день — ніч. Дитина вже розпізнає частини тіла, вчиться сортувати об\'єкти і знаходити однакові за формою і кольором. Дитина вчиться запам\'ятовувати та характеризувати об\'єкти.\n'
      },
      {
        img: require('../assets/textimgthree.svg'),
        title: 'Ігри та навчання.',
        text: 'Крім завдань на логіку, корисно розвивати емоційний інтелект, а також діти освоюють рольові ігри. З цікавістю реагують на нову інформацію від дорослих, адже їх життєвий досвід лише здобувається. Тому все нове - цікаво.'
      }]
  })
}
</script>

<style scoped>

</style>
