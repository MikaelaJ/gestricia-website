<template>
  <v-footer class="grey darken-2">
    <v-container class="px-0">
      <v-row justify="center">
        <v-col md="4">
          <div
            v-for="(linkaboutus, k) in aboutus"
            :key="`${k}-${linkaboutus.fields.title}`"
            class=""
          >
            <nuxt-link :to="linkaboutus.fields.link">
              <p class="text-center justify-center link">
                {{ linkaboutus.fields.title }}
              </p>
            </nuxt-link>
          </div>
          <div
            v-for="(linkcontact, j) in contact"
            :key="`${j}-${linkcontact.fields.link}`"
            class=""
          >
            <nuxt-link :to="linkcontact.fields.link">
              <p class="text-center justify-center link">
                {{ linkcontact.fields.title }}
              </p>
            </nuxt-link>
          </div>
        </v-col>

        <v-col md="4">
          <v-col
            v-for="(tjanst, i) in tjanster"
            :key="`${i}-${tjanst.fields.title}`"
            class="pa-0 ma-0"
          >
            <v-list-item-content class="pa-0 ma-0">
              <v-list-item-title class="pa-0 ma-0">
                <nuxt-link :to="tjanst.fields.link" right class="">
                  <p class="text-center justify-center link">
                    {{ tjanst.fields.title }}
                  </p>
                </nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-col>

        <!--  <v-col md="4">
          <v-col v-for="link in list" :key="link.link" class="pa-0 ma-0">
            <v-list-item-content class="pa-0 ma-0">
              <v-list-item-title class="pa-0 ma-0">
                <nuxt-link :to="link.route">
                  <p class="text-center justify-center link">
                    {{ link.link }}
                  </p>
                </nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-col> -->

        <v-col
          v-for="(location, i) in iframe"
          :key="`${i}-${location.fields.iframe}`"
          md="4"
        >
          <v-list-item-content class="pa-0 ma-0">
            <v-list-item-title class="pa-0 ma-0">
              <p class="text-center justify-center link">
                {{ location.fields.adress }}
              </p>
              <p class="text-center justify-center link">
                Organisationsnummer: 559162-2096
              </p>
            </v-list-item-title>
          </v-list-item-content>
        </v-col>
      </v-row>
      <v-row class="grey darken-2">
        <v-col cols="12 ma-0">
          <h5 class="Ggrey--text text-center">
            &copy; Tobias Larsson {{ new Date().getFullYear() }}
          </h5>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('getroute', ['contact']),
    ...mapState('getroute', ['aboutus']),
    ...mapState('getroute', ['tjanster']),
    ...mapState('getroute', ['dropdownTitle']),
    ...mapState('getpage', ['iframe'])
  },
  async created() {
    await this.getRoute({
      content_type: 'tjanster',
      order: '-sys.createdAt'
    })
    await this.getRoute({
      content_type: 'contact'
    })
    await this.getRoute({
      content_type: 'aboutus'
    })
    await this.getRoute({
      content_type: 'dropdownTitle'
    })
    await this.getPage({ content_type: 'iframe' })
  },
  methods: {
    ...mapActions('getroute', ['getRoute']),
    ...mapActions('getpage', ['getPage'])
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 0.8em;
}
</style>
