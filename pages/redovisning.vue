<template>
  <v-content class="pt-0">
    <v-row class="Gpink intro">
      <v-container>
        <v-col
          cols="12"
          sm="12"
          md="8"
          offset-md="2"
          class="white--text pt-10 body-2"
        >
          <h1 class="text-center pb-5">Redovisning</h1>
          <span>subst. <strong>~en ~ar</strong></span> <br />
          <span class="font-weight-light"
            >ORDLED: <strong>redo--vis-ning-en </strong>
          </span>
          <br />
          <span
            >• spec. äv. i ekon. sammanhang rapport om hur anförtrodda pengar
            använts: redovisningsskyldig; skatteredovisning; vinstredovisning;
            årsredovisning; han hade lämnat ordentligt med hushållspengar och
            aldrig bett om ~</span
          >
        </v-col>
      </v-container>
    </v-row>
    <div>
      <v-img :src="require('../assets/img/redovisning.jpg')" max-height="430px">
      </v-img>
    </div>

    <v-flex>
      <v-container>
        <v-row class="pt-10">
          <v-col cols="12">
            <h1 class="Gpink--text text-center pb-10">
              Låt oss sköta din löpande bokföring!
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(card, i) in redovisning"
            :key="`${i}-${card.fields.title}`"
            cols="12"
            sm="6"
            md="3 "
          >
            <v-card min-height="200">
              <v-card-title class="Gpink--text justify-center">
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
      title: 'Redovisning'
    }
  },
  computed: {
    ...mapState('getpage', ['redovisning'])
  },
  async created() {
    await this.getPage({
      content_type: 'redovisning',
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
