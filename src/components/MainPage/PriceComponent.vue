<template>
  <div class="priceComponent" style="padding: 0 5%; margin-bottom: 70px;">
    <h3 style="
      margin-top: 70px;
      font-style: normal;
      font-weight: 600;
      font-size: 58px;
      color: #64B3F4;
    ">Ціни</h3>
    <template>
      <div class="row__time" v-for="( item, i ) in items" :key='i'>
        <h4>{{ item.shortdayTime }}</h4>
        <h4>{{ item.longTime }}</h4>
      </div>
      <div class="row" v-for="( item, i ) in items" :key='i' style="
        height: 80px;
        border-bottom: 1px solid gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <h4 style="
          font-style: normal;
          font-weight: 500;
          font-size: 25px;
          color: #E83542;
        ">{{ item.name }}</h4>
        <div class="row_info" style="
          display: flex;
          flex-direction: row;
          column-gap: 30px;
         ">
          <p>{{ item.shortday }}</p>
          <p>{{ item.long }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'PriceComponent',
  data () {
    return {
      items: [
        {
          name: '',
          shortdayTime: '8:30 - 13:00',
          longTime: '8:30 - 19:00'
        },
        {
          name: '3 дні / тиждень',
          shortday: '',
          long: '14 000 грн Харчування 120 грн/день'
        },
        {
          name: '5 днів / тиждень',
          shortday: '14 000 грн Харчування 120 грн/день',
          long: '16 000 грн Харчування 165 грн/день'
        },
        {
          name: 'Реєстраційний внесок',
          shortday: '18 000 грн',
          long: '18 000 грн'
        }
      ]
    }
  }
}
</script>

<style scoped>
p {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  color: #000000;
  padding: 0;
  margin: 0;
}
.row_info p,
.row__time h4 {
  width: 289px;
}
.row__time {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: flex-end;
  text-align: center;
  position: relative;
  bottom: -50px;
}
.row__time h4 {
  font-weight: 500;
  font-size: 25px;
  color: #E83542;
}
</style>
