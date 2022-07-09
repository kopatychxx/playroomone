<template>
  <div class="drawerComponent">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <div class="drawer__content">
        <v-select
          :items="languages"
          v-model="language"
          style="font-family: 'Montserrat Alternates', sans-serif"
        ></v-select>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'DrawerComponent',
  data: () => ({
    drawer: false,
    group: null,
    languages: [
      'Укр', 'Рус', 'Eng'
    ],
    language: ''
  }),
  mounted () {
    if (localStorage.language) {
      this.language = localStorage.language
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
    language (newLanguage) {
      localStorage.language = newLanguage
    }
  }
}
</script>

<style scoped>
.drawer__content {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 0 20px;
}
.v-application .primary--text {
  color: #E83542 !important;
}

</style>
