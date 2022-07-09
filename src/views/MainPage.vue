<template>
  <div class="mainPage">
    <LandingComponent style="background-color: #F4FAFF;"/>
    <AboutComponent />
    <BenefitsComponent />
    <ScheduleComponent />
    <LessonsComponent />
    <GroupsComponent />
    <PriceComponent />
  </div>
</template>

<script>
import LandingComponent from '@/components/MainPage/LandingComponent'
import AboutComponent from '@/components/MainPage/AboutComponent'
import BenefitsComponent from '@/components/MainPage/BenefitsComponent'
import ScheduleComponent from '@/components/MainPage/ScheduleComponent'
import GroupsComponent from '@/components/MainPage/GroupsComponent'
import LessonsComponent from '@/components/MainPage/LessonsComponent'
import PriceComponent from '@/components/MainPage/PriceComponent'
export default {
  name: 'MainPage',
  components: { PriceComponent, LessonsComponent, GroupsComponent, ScheduleComponent, BenefitsComponent, AboutComponent, LandingComponent }
}
</script>

<style scoped>
html, body, a , h1, h2, h3, p {
  font-family: 'Montserrat Alternates', sans-serif !important;
}
.btn {
  background-color: black !important;
  color: white;
  border: 1px solid white;
  padding: 2px !important;
}

</style>
