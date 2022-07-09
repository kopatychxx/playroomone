<template>
  <div class="benefitsComponents" style="
  font-family: 'Montserrat Alternates', sans-serif !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 70px auto;
  padding: 0 5%;
   ">
    <div class="row">
      <div class="row-block" style="border: none">
        <h2 style="">Наші переваги</h2>
      </div>
      <div class="row-block">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              src="../../assets/gif/first.gif"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%;
                  box-shadow: none!important;
                  font-weight: 500;
                  font-size: 26px !important;
                  line-height: 32px;
                  text-align: center;
                  color: #E83542 !important;
                  font-family: 'Montserrat Alternates', sans-serif !important;
                  "
                >
                  Знаходимо баланс між структурованим навчанням та пізнавальними іграми для ваших діток.
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </div>
      <div class="row-block">
        <p>Наш освітній підхід включає елементи <span>«RESPONSIVE CLASSROOM».</span> Всім відомо, що успішне дитина – це щаслива дитина. Для нас надзвичайно важливо, щоб між учителем і учнем завжди відбувався діалог, щоб вони співпрацювали. </p>
        </div>
    </div>
    <div class="row">
      <div class="row-block">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              src="../../assets/gif/secondIcon.gif"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%;
                  box-shadow: none!important;
                  font-weight: 500;
                  font-size: 26px !important;
                  line-height: 32px;
                  text-align: center;
                  color: #E83542 !important;
                  font-family: 'Montserrat Alternates', sans-serif !important;
                  "
                >
                  Знаходимо баланс між структурованим навчанням та пізнавальними іграми для ваших діток.
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </div>
      <div class="row-block">
        <p>Дітям потрібно досягати вершин – адже їхній ключик до успіху – не боятись робити помилки. Помилки – це ще одна із можливостей навчатися.
        </p>
      </div>
      <div class="row-block">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              src="../../assets/gif/thirdicon.gif"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%;
                  box-shadow: none!important;
                  font-weight: 500;
                  font-size: 26px !important;
                  line-height: 32px;
                  text-align: center;
                  color: #E83542 !important;
                  font-family: 'Montserrat Alternates', sans-serif !important;
                  "
                >
                  Знаходимо баланс між структурованим навчанням та пізнавальними іграми для ваших діток.
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </div>
    </div>
    <div class="row">
      <div class="row-block">
        <p>У Сполучених Штатах Америки підхід <span>«RESPONSIVE CLASSROOM»</span> був реалізований в багатьох дошкільних навчальних закладах та виявився надзвичайно ефективним. </p>
      </div>
      <div class="row-block">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              src="../../assets/gif/fouthicon.gif"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%;
                  box-shadow: none!important;
                  font-weight: 500;
                  font-size: 26px !important;
                  line-height: 32px;
                  text-align: center;
                  color: #E83542 !important;
                  font-family: 'Montserrat Alternates', sans-serif !important;
                  "
                >
                  Знаходимо баланс між структурованим навчанням та пізнавальними іграми для ваших діток.
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </div>
      <div class="row-block">
        <p>Він підтверджений багатьма дослідженнями, за його допомогою досягаються підвищення успішності, зменшення  проблем з поведінкою, розвиток соціальних навичок і реалізація більш якісної освіти.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitsComponents'
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.row-block {
  width: 400px;
  height: 400px;
  border: 1px solid #E1E1E1;
  padding: 10px;
}
.row-block h2 {
  font-weight: 600;
  font-size: 58px;
  color: #64B3F4;
}
.row-block p {
  font-style: normal;
  font-size: 20px;
  color: #000000;
}
.row-block p span {
  color: #E83542;
  font-weight: 500;
}
.row-block img {
  width: 350px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
  background: rgba(255, 248, 248, 0.9);
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
</style>
