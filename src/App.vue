<template>
  <v-app>
    <v-main>
      <HeaderComponent/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import HeaderComponent from '@/components/Header/Header'
export default {
  name: 'App',
  components: { HeaderComponent },
  data: () => ({
    //
  })
}
</script>
<style>
html, body, a , h1, h2, h3, p {
  font-family: 'Montserrat Alternates', sans-serif !important;
}
</style>
