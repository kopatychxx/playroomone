<template>
  <v-sheet
    class="mx-auto"
    elevation="0"
    style="
      display: flex;
      justify-content: center;
      width: 1150px;
      margin-top: 70px;
      background-color: #F4FAFF !important;
    ">
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
      style="background-color: #F4FAFF !important;"
    >
      <v-slide-item
        v-for="item, i in items"
        :key="i"
      >
        <v-card
          class="ma-4"
          width="170"
          elevation="0"
          style="
          background:none;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            text-align: center;
            align-items: center;
            background-color: #F4FAFF !important;
          ">
          <div class="card__img" style="
            width: 165px;
            height: 230px;
            background: #FFF8F8;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            filter: drop-shadow(5px 5px 5px rgba(232, 53, 66, 0.15));
          ">
            <img :src="item.img" alt="" width="100">
          </div>
          <div class="req" style="
            width: 15px;
            height: 15px;
            background: #E83542;
            border-radius: 100px;
            margin: 18px auto;
          "></div>
          <p style="
            font-weight: 500;
            font-size: 15px;
            text-align: center;
            color: #E83542;
            margin-bottom: 7px;
           ">{{item.time}}</p>
          <p>{{item.description}}</p>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: 'TimetableMiddle',
  data: () => ({
    model: null,
    items: [
      { img: require('../../assets/slider/test.svg'), time: '08:30 - 9:00', description: 'Welcome Time' },
      { img: require('../../assets/slider/test.svg'), time: '9.00 - 9.15', description: 'Circle time' },
      { img: require('../../assets/slider/test.svg'), time: '9.15 - 9.30', description: 'Snack Time' },
      { img: require('../../assets/slider/test.svg'), time: '9.30-10:00', description: 'Lesson1' },
      { img: require('../../assets/slider/test.svg'), time: '10:00-10:30', description: 'Lesson 2' },
      { img: require('../../assets/slider/test.svg'), time: '10.30 - 11.30', description: 'Playing outside' },
      { img: require('../../assets/slider/test.svg'), time: '11.30 - 12.15', description: 'Lesson 3' },
      { img: require('../../assets/slider/test.svg'), time: '12.30-13.15', description: 'Lesson 4' },
      { img: require('../../assets/slider/test.svg'), time: '13.30-13.45', description: 'Lunch' },
      { img: require('../../assets/slider/test.svg'), time: '14.00. - 14.45', description: 'Lesson 5' },
      { img: require('../../assets/slider/test.svg'), time: '15.00-15.30', description: 'Lesson 6' },
      { img: require('../../assets/slider/test.svg'), time: '15.30-15.45', description: 'Snack' },
      { img: require('../../assets/slider/test.svg'), time: '15.45-16.15', description: 'Playing outside' },
      { img: require('../../assets/slider/test.svg'), time: '16.15 -17:30', description: 'Lesson 7' },
      { img: require('../../assets/slider/test.svg'), time: '17.30 - 18.00', description: 'Dinner' },
      { img: require('../../assets/slider/test.svg'), time: '18.00 - 19.00', description: 'Playing outside' }
    ]
  })
}
</script>

<style scoped>
.line {
  display: block;
  position: absolute;
  bottom: 248px;
  width: 100%;
  height: 2px;
  background-color: #CFCFCF;
  content: '';
  z-index: 1 !important;
}
</style>
