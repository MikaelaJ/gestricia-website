<template>
  <v-content class="pt-0">
    <v-row class="Ggrey">
      <v-container>
        <v-col
          cols="12"
          sm="12"
          md="8"
          offset-md="2"
          class="white--text pb-10 body-2"
        >
          <h1 class="text-center py-5">Om oss</h1>

          <h4 class="text-center pb-10">
            Gestricia Redovisning skapades utifrån att redovisning och bokföring
            inte skulle vara ett anonymt och tråkig moment som företagen måste
            genomföra, utan att det istället ska ses som en möjlighet att få
            viktig återkoppling på hur ditt företag mår, likt din årliga
            hälsokontroll hos läkaren. Därför ser vi det som väsentligt att när
            man blir kund hos oss ska du få löpande återkoppling av oss och
            ordenliga genomgångar vid årsavslut. Behöver ni som kund rådgivning
            eller stöttning i ditt företagande är vi byrån för er.
          </h4>
          <h4 class="text-center pb-10">
            Gestricia Redovisning jobbar gärna med olika digitala lösningar
            gentemot kunder och till följd av det har vi också kunder över hela
            Sverige men vi siktar alltid på att få ett personligt möte med våra
            kunder minst en gång om året. Personliga möten är fortfarande något
            vi upplever våra kunder uppskattar och något vi kommer fortsätta med
            så länge efterfrågan finns.
          </h4>
        </v-col>
      </v-container>
    </v-row>
    <!-- <div>
      <v-img :src="require('../assets/img/deklaration.png')" max-height="430px">
      </v-img>
    </div> -->

    <v-flex>
      <v-container>
        <v-row class="pt-10">
          <v-col cols="12">
            <h1 class="Ggrey--text text-center pb-10">
              Omdömen
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(review, i) in reviews"
            :key="`${i}-${review.fields.title}`"
            cols="12"
            sm="6"
            md="6"
          >
            <v-card min-height="250">
              <v-card-title class="Ggrey--text justify-center">
                {{ review.fields.title }}
              </v-card-title>
              <v-card-text class="text-center px-10">{{
                review.fields.text
              }}</v-card-text>
              <v-card-text class="text-center">
                <h5>{{ review.fields.date }}</h5>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-content>
</template>

<script>
/* import VueMarkdown from 'vue-markdown' */
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    /* VueMarkdown */
  },
  data() {
    return {}
  },

  computed: {
    ...mapState('getpage', ['reviews'])
  },
  async created() {
    await this.getPage({
      content_type: 'reviews',
      order: '-sys.createdAt'
    })
  },
  methods: {
    ...mapActions('getpage', ['getPage'])
  },
  head() {
    return {
      title: 'Kontakt'
    }
  }
}
</script>

<style lang="scss" scoped></style>
