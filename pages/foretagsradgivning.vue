<template>
  <v-content class="pt-0">
    <v-row class="Gorange intro">
      <v-container>
        <v-col
          cols="12"
          sm="12"
          md="8"
          offset-md="2"
          class="white--text pt-10 body-2"
        >
          <h1 class="text-center pb-5">Företagsrådgivning</h1>
          <span>subst. <strong>~en ~er</strong></span>
          <br />
          <span class="font-weight-light"
            >ORDLED: <strong>ad-min-istr-at-ion-en</strong>
          </span>
          <br />
          <span
            >• det att (planmässigt) sköta ngt för annans räkning särsk. (viss)
            verksamhet el. (vissa) ärenden till det allmännas, en institutions,
            ett företags etc. bästa: administrationskostnad;
            personaladministration; den offentliga ~en kan sägas gälla allt utom
            lagstiftning, rättskipning och direkt regeringsverksamhet; något
            slags ~ är nödvändig i ett stort företag</span
          >
        </v-col>
      </v-container>
    </v-row>
    <div>
      <v-img :src="require('../assets/img/bokslut.jpeg')" max-height="430px">
      </v-img>
    </div>

    <v-flex>
      <v-container>
        <v-row class="pt-10">
          <v-col cols="12">
            <h1 class="Gorange--text text-center pb-10">
              Jag kan hjälpa dig med löneadministrationen.
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(card, i) in foretagsradgivning"
            :key="`${i}-${card.fields.title}`"
            cols="12"
            sm="6"
            md="6"
          >
            <v-card min-height="200">
              <v-card-title class="Gorange--text justify-center">
                {{ card.fields.title }}
              </v-card-title>
              <v-card-text class="text-center">{{
                card.fields.text
              }}</v-card-text>
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
  head() {
    return {
      title: 'Foretagsradgivning'
    }
  },
  computed: {
    ...mapState('getpage', ['foretagsradgivning'])
  },
  async created() {
    await this.getPage({
      content_type: 'foretagsradgivning',
      order: '-sys.createdAt'
    })
  },
  methods: {
    ...mapActions('getpage', ['getPage'])
  }
}
</script>

<style lang="scss">
.intro {
  height: 30vh;
}
</style>
