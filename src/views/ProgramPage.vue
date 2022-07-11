<template>
  <div class="programPage" style="padding: 0 5%;">
    <div class="programPage__landing">
      <div class="programPage__text" style="display: flex;justify-content: space-between;">
        <h1 style="
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
        color: #E83542;
        ">Программа</h1>
        <p style="
      max-width: 359px;
      font-weight: 400;
      font-size: 24px;
      color: #000000;"
        >Садок Playroom англомовний простір де 80% всього часу діти спілкуються з дорослими англійською мовою</p>
      </div>
      <img src="../assets/program.svg" alt="" width="100%">
    </div>
    <div class="programPage__rows"           style="text-align: center;margin-top:50px;row-gap: 20px;display: flex;flex-direction: column">
      <div class="programPage__rows-row"
           v-for="(language, i) in languages"
           :key="i">
        <div class="alltext" style="width:90%"><span>{{language.title}}</span>{{ language.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramPage',
  data: () => ({
    languages: [
      {
        title: 'Ми працюємо за власною програмою навчання, ',
        text: 'виховання та розвитку дітей, в основу якої покладена американська програма розвитку дітей дошкільного віку “Creative Curriculum”, але ми також використовуємо елементи сучасних  і ефективних методичних систем раннього розвитку та виховання відомих світових авторів'
      },
      {
        title: '“Creative Curriculum”'
      },
      {
        title: 'Навчання в Playroom',
        text: ' - це комплекс захопливих уроків, що проходять в ігровій формі. Серед предметів, які ми вивчаємо повноцінна підготовка до школи : математика, навколишній світ, розвиток мовлення. Фізична підготовка поєднана з танцями та театральним дійством. \n' +
          'У нас діти занурюються в англомовний світ гри, навчальних пісень та віршиків з рухливими вправами та можливістю виразити себе у мистецтві. Також двічі на тиждень маємо заняття з французької мови. Наша мета – надати якісні та ефективні знання таким чином, щоб навчальний процес не був нав’язливим для дитини, приносив користь та задоволення\n'
      }
    ]
  })
}
</script>

<style scoped>
.cquared {
  width: 20px;
  height: 3px;
  background: #E83542;
  margin: 0 20px;
}
.programPage__rows-row{
  display: flex;
  align-items: center;
}
.alltext span{
  font-weight: 500;
  color: #E83542;
}
</style>
