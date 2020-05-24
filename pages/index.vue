<template>
  <v-layout justify-center align-center>
    <v-flex>
      <v-container>
        <v-row>
          <v-col md="8" offset-md="2" class="text-center pt-n10 mt-n10">
            <h1>Gestricia Redovisningsbyrå</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="8" offset-md="2" class="text-center pb-10">
            <h4>
              Vi på Gestricia Redovisnings byrå älskar siffror! Varför inte
              kontakta oss om ni tycker att skattelagstifningen känns snårigare
              än en djungel, eller om ni bara vill prata företagsideér. Eller du
              kanske redan har företag och behöver någon ny pusselbit här och
              där för att ta ditt företag till nästa steg. Vi finns här!
            </h4>
          </v-col>
        </v-row>
      </v-container>

      <div class="Gpurple pt-10">
        <v-container>
          <v-row>
            <v-col
              v-for="(card, i) in cardsIndexpage"
              :key="`${i}-${card.fields.title}`"
              class="pa-3"
              cols="12"
              sm="12"
              md="4"
            >
              <a href="#">
                <!-- <nuxt-link :to="card.fields.slug"> -->
                <v-card min-height="500" class="ma-3">
                  <div :class="card.fields.color">
                    <figure class="">
                      <v-responsive>
                        <v-img
                          contain
                          hover
                          class="my-7"
                          height="20vh"
                          :src="card.fields.icon.fields.file.url"
                        ></v-img>
                      </v-responsive>
                    </figure>
                  </div>

                  <v-card-title class="justify-center pt-10 mb-n7">
                    <vue-markdown>{{ card.fields.title }}</vue-markdown>
                  </v-card-title>
                  <v-card-text>
                    <vue-markdown class="text-center">{{
                      card.fields.text
                    }}</vue-markdown>
                  </v-card-text>
                  <!-- <v-card-actions>
                <v-spacer />
                <v-btn color="primary" nuxt to="/inspire">
                  Continue
                </v-btn>
              </v-card-actions> -->
                </v-card>
                <!-- </nuxt-link> -->
              </a>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="Gorange bg-color">
        <v-container>
          <v-row>
            <v-col>
              <h1 class="white--text text-center pb-8">
                Vi finns här för dig när
              </h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="5" class="mx-auto">
              <v-responsive>
                <v-img :src="require('../assets/img/multi.png')"></v-img>
              </v-responsive>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="pt-3 pb-8">
                <v-col
                  v-for="(infos, i) in info"
                  :key="`${i}-${infos.fields.title}`"
                  cols="12"
                >
                  <div class="px-8">
                    <v-card-title class="pb-0"
                      ><v-icon class="Gorange--text ml-n8 pr-2"
                        >mdi-checkbox-marked-circle</v-icon
                      >{{ infos.fields.title }}</v-card-title
                    >
                    <v-card-text class="pb-0">{{
                      infos.fields.text
                    }}</v-card-text>
                  </div>
                </v-col>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div>
        <v-row>
          <v-col
            v-for="(location, i) in iframe"
            :key="`${i}-${location.fields.iframe}`"
            cols="12"
            sm="12"
            md="12"
          >
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" hover>
              <v-responsive>
                <iframe
                  :src="getLocation(location.fields.location)"
                  frameborder="0"
                  width="100%"
                  height="450"
                  style="border:0;"
                  allowfullscreen
                ></iframe>
              </v-responsive>
            </v-col>
            <v-row justify="center" class="pt-10">
              <v-col>
                <h3 class="text-center">Adress:</h3>
                <p class="text-center">
                  {{ location.fields.adress }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Startsida'
    }
  },
  computed: {
    ...mapState('getpage', ['cardsIndexpage']),
    ...mapState('getpage', ['info']),
    ...mapState('getpage', ['iframe'])
  },
  async created() {
    await this.getPage({
      content_type: 'cardsIndexpage',
      order: '-sys.createdAt'
    })
    await this.getPage({
      content_type: 'info',
      order: 'sys.createdAt'
    })
    await this.getPage({ content_type: 'iframe' })
  },
  methods: {
    ...mapActions('getpage', ['getPage']),
    load() {
      this.iframe.loaded = true
      this.img.loaded = true
    },

    getLocation(plats) {
      let src
      if (plats) {
        src =
          'https://maps.google.com/maps?q=' +
          JSON.stringify(plats.lat) +
          ', ' +
          JSON.stringify(plats.lon) +
          '&z=15&output=embed'
      }
      return src
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style.scss';
.indexcard {
  border-radius: 6px;
  object-fit: cover;
  object-position: 60% 0;
  /* width: 300px;*/
  overflow: hidden;
  /* clip-path: inset(0% 10% 0% 10%); */
  padding: 0;
}
.cardbox {
  width: 85%;
  height: 300px;
  z-index: 1;
  margin-bottom: -100px;
}

.bg-color {
  margin-top: -130px;
  padding-top: 150px;
}
</style>
