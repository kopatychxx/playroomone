<template>
  <div class="about" style="
    display: flex;
    padding: 70px 5%;
    justify-content: space-between;
    align-items: center;
    background-color: #F4FAFF;
">
    <div class="about__number" >
      <div class="about__number-row"
           v-for="(row, i) in rows"
           :key="i"
      style="
        display: flex;
        justify-content: space-between;
        align-items: end;
        width: 800px;
        border-bottom: 1px solid #CFCFCF;
      ">
        <h3 style="
        font-weight: 600;
        font-size: 40px;
        color: #E83542;
        ">
          {{ row.number }}</h3>
        <p style="
        font-weight: 400;
        font-size: 20px;
        color: #000000;

        ">
          {{ row.text }} </p>
      </div>
    </div>
    <div class="about__text" style="display: flex; flex-direction: column; align-items: end">
      <h3 style="
        font-weight: 600;
        font-size: 40px;
        text-align: right;
        color: #64B3F4;
      ">Про нас</h3>
      <p style="
        font-weight: 400;
        font-size: 20px;
        text-align: right;
        color: #000000;
        max-width: 520px;
      ">Шукаєте дружнє місце для дітей, де вони могли б навчатися, грати, рухатися, творити годинами та ніколи не нудьгувати? І все це – переважно англійською мовою?</p>
      <router-link style="text-decoration: none" to="/about"><v-btn class="aboutbtn" style="
      width: 200px;
      height: 50px;
      background: none;
      box-shadow: none;
      border: 1px solid #E83542;
      border-radius: 35px;
      color: #E83542;
      ">Читати далі</v-btn></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  data: () => ({
    rows: [
      {
        number: '2021',
        text: 'Садочок був заснован '
      },
      {
        number: '1028',
        text: 'Дітей було навченно'
      },
      {
        number: '25',
        text: 'Занятть у садочку'
      }]
  })
}
</script>

<style scoped>
</style>
