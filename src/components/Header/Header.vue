<template>
  <div class="header">
    <router-link to="/"><img style="max-width:100px" src="../../assets/logoplay.svg" alt="PlayRoom"></router-link>
    <ul class="header__menu">
      <li>
        <v-menu
          origin="center center"
          transition="scale-transition"
          bottom
          open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="header__menu__hover"
              elevation="0"
              v-bind="attrs"
              v-on="on"
              style="background: none !important;
              padding: 0;">
              Про нас
              <i class="v-icon notranslate mdi mdi-chevron-down theme--light"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in about"
              :key="i"
            >
              <v-list-item-title><router-link :to="item.link">{{ item.name }}</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li>
        <v-menu
          origin="center center"
          transition="scale-transition"
          bottom
          open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="header__menu__hover"
              elevation="0"
              v-bind="attrs"
              v-on="on"
              style="background: none !important;
              padding: 10px;">
              Умови
              <i class="v-icon notranslate mdi mdi-chevron-down theme--light"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in terms"
              :key="i"
            >
              <v-list-item-title><router-link to="/history">{{ item.name }}</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li>
        <v-menu
          origin="center center"
          transition="scale-transition"
          bottom
          open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="header__menu__hover"
              elevation="0"
              v-bind="attrs"
              v-on="on"
              style="background: none !important;
              padding: 10px;">
              Садок
              <i class="v-icon notranslate mdi mdi-chevron-down theme--light"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in kindergarten"
              :key="i"
            >
              <v-list-item-title><router-link to="/history">{{ item.name }}</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li>
        <v-menu
          origin="center center"
          transition="scale-transition"
          bottom
          open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="header__menu__hover"
              elevation="0"
              v-bind="attrs"
              v-on="on"
              style="background: none !important;
              padding: 10px;">
              Інші сторінки
              <i class="v-icon notranslate mdi mdi-chevron-down theme--light"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in anotherPage"
              :key="i"
            >
              <v-list-item-title><router-link to="/history">{{ item.name }}</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
    </ul>
    <div class="select" style="display: flex; column-gap: 20px">
      <v-select
        :items="kindergardens"
        v-model="kindergarden"
        style="
      font-family: 'Montserrat Alternates', sans-serif;
      max-width: 100px !important;
      "
      ></v-select>
      <v-select
        :items="languages"
        v-model="language"
        style="
      font-family: 'Montserrat Alternates', sans-serif;
      max-width: 50px !important;
      "
      ></v-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    about: [
      {
        name: 'Наша історія',
        link: '/history'
      },
      {
        name: 'Вчителі',
        link: '/teachers'
      },
      {
        name: 'Програма',
        link: '/program'
      }
    ],
    terms: [
      {
        name: 'Інфраструктура',
        link: '/infrastructure'
      },
      {
        name: 'Харчування',
        link: '/food'
      },
      {
        name: 'Розклад',
        link: '/schedule'
      },
      {
        name: 'Вартість',
        link: '/cost'
      }],
    kindergarten: [
      {
        name: '2-3 роки',
        link: '/2-3year'
      },
      {
        name: '3-4 роки',
        link: '/3-4year'
      },
      {
        name: '4-5 років',
        link: '/4-5year'
      },
      {
        name: '5-6 років',
        link: '/5-6year'
      },
      {
        name: 'Day Care',
        link: '/dayCare'
      }],
    anotherPage: [
      {
        name: 'Covid-19',
        link: '/covid19'
      },
      {
        name: 'Англійська он-лайн',
        link: '/englishOnline'
      },
      {
        name: 'Літній табір',
        link: '/summerCamp'
      },
      {
        name: 'Контакти',
        link: '/contact'
      }],
    languages: ['🇺🇦', '🇺🇲'],
    language: '🇺🇦',
    kindergardens: ['Київ', 'Козін'],
    kindergarden: 'Київ'
  }),
  mounted () {
    if (localStorage.language) {
      this.language = localStorage.language
    }
    if (localStorage.kindergarden) {
      this.kindergarden = localStorage.kindergarden
    }
  },
  watch: {
    language (newLanguage) {
      localStorage.language = newLanguage
    },
    kindergarden (newKindergarden) {
      localStorage.kindergarden = newKindergarden
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 5%;
  align-items: center;
  background-color: #F4FAFF;
}
.header__menu {
  display: flex;
  column-gap: 20px;
  list-style: none;
}
.header__menu li {
  font-family: 'Montserrat Alternates',serif;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  color: #000;
}
.header__menu__hover :hover {
  color: red;
  background: none !important;
}
.theme--light.v-btn:hover::before {
  opacity: 0 !important;
}
.v-list-item__title a {
  color: black !important;
  text-decoration: none;
}
.v-menu__content {
  top:65px !important;
}
</style>
