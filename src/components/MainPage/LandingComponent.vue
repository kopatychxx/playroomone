<template>
  <div class="landing" style="padding: 0 5%;">
    <div class="landing__text" style="
    display: flex;
    justify-content: space-between;
    align-items: center">
      <div class="landing__text-header">
        <h1 style="
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
        color: #E83542;"
        >Playroom</h1>
        <h3 style="
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        color: #000000;
        margin: -25px 0px 0"
        >Kindergarten</h3>
      </div>
      <p style="
      max-width: 359px;
      font-weight: 400;
      font-size: 24px;
      color: #000000;"
      >Ваш англомовний садочок з <span style="color: #E83542;"> білінгвальним методом </span> навчання
      </p>
    </div>
    <img v-if="this.gif == true" style="width: 100%" src="../../assets/main.gif" alt="">
    <img v-else-if="this.photo == true" style="width: 100%" src="../../assets/main.png" alt="">
    <div class="block" style="
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color:lightgray;
      padding: 30px;
      border-radius: 100px;
      ">
      <v-btn @click="onPhoto">Photo</v-btn>
      <v-btn @click="onGif">Gif</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingComponent',
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
      }],
    photo: true,
    gif: false
  }),
  mounted () {
    if (this.photo === true) {
      this.gif = false
    } else if (this.gif === true) {
      this.photo = false
    }
    console.log(this.photo, this.gif)
  },
  methods: {
    onPhoto () {
      this.photo = true
      this.gif = false
      console.log(this.photo, this.gif)
    },
    onGif () {
      this.gif = true
      this.photo = false
      console.log(this.photo, this.gif)
    }
  }

}
</script>

<style scoped>

</style>
