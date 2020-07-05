<template>
  <v-content class="pt-0">
    <v-row class="Ggrey intro">
      <v-container>
        <v-col
          cols="12"
          sm="12"
          md="8"
          offset-md="2"
          class="white--text pt-10 body-2"
        >
          <h1 class="text-center pb-5">Inkomstdeklaration</h1>
          <span>subst. <strong>~en ~er</strong></span>
          <br />
          <span class="font-weight-light"
            >ORDLED: <strong>de-klar-at-ion-en</strong>
          </span>
          <br />
          <span
            >• skriftlig sammanfattning av (ngns) årliga inkomst- och
            förmögenhetsuppgifter, som lämnas in till myndighet som grund för
            beskattning enl. bestämda regler och på särskilda blanketter; i
            fråga om fysiska el. jur. personer: deklarationsblankett;
            deklarationsbyrå; självdeklaration; skuldräntan kan delvis dras av i
            ~en; ~en skall lämnas in före 2 maj; ersättningen behöver inte tas
            upp i ~en ~</span
          >
        </v-col>
      </v-container>
    </v-row>
    <div>
      <v-img :src="require('../assets/img/deklaration.png')" max-height="430px">
      </v-img>
    </div>

    <v-flex>
      <v-container>
        <v-row class="pt-10">
          <v-col cols="12">
            <h1 class="Ggrey--text text-center pb-10">
              Jag kan hjälpa dig att fixa dina deklarationer!
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(card, i) in bokslut"
            :key="`${i}-${card.fields.title}`"
            cols="12"
            sm="6"
            md="6"
          >
            <v-card min-height="200">
              <v-card-title class="Ggrey--text justify-center">
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
      title: 'Bokslut'
    }
  },
  computed: {
    ...mapState('getpage', ['bokslut'])
  },
  async created() {
    await this.getPage({
      content_type: 'bokslut',
      order: '-sys.createdAt'
    })
  },
  methods: {
    ...mapActions('getpage', ['getPage'])
  }
}
</script>

<style lang="scss" scoped>
.intro {
  height: 30vh;
}
</style>
