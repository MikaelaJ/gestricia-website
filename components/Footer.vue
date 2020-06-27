<template>
  <v-footer class="grey darken-2">
    <v-container fluid class="px-0">
      <v-row justify="center">
        <v-col md="4">
          <v-col
            v-for="infolink in info"
            :key="infolink.link"
            class="pa-0 ma-0"
          >
            <v-list-item-content class="pa-0 ma-0">
              <v-list-item-title class="pa-0 ma-0">
                <nuxt-link :to="infolink.route">
                  <p class="text-center justify-center link">
                    {{ infolink.link }}
                  </p>
                </nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-col>

        <v-col md="4">
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
        </v-col>

        <v-col md="4">
          <v-list-item-content class="pa-0 ma-0">
            <v-list-item-title class="pa-0 ma-0">
              <p class="text-center justify-center link">
                tobias@gestricia.se <br />
                +46 (0)72 200 02 41
              </p>
              <p class="text-center justify-center link">
                Organisationsnummer: 559162-2096
              </p>
            </v-list-item-title>
          </v-list-item-content>
        </v-col>
      </v-row>
      <v-row class="grey darken-3">
        <v-col cols="12 ma-0">
          <h5 class="Ggrey--text text-center">
            Tobias Larsson &copy; {{ new Date().getFullYear() }}
          </h5>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          link: 'Redovisning',
          route: '/redovisning'
        },
        {
          link: 'Bokslut',
          route: '/bokslut'
        },
        {
          link: 'Deklaration',
          route: '/deklaration'
        },
        {
          link: 'Uppstart',
          route: '/uppstart'
        },
        {
          link: 'Löneadministration',
          route: '/loneadmin'
        },
        {
          link: 'Företagsrådgivning',
          route: '/foretagsradgivning'
        }
      ],
      info: [
        {
          link: 'Om Gestricia',
          route: '/omoss'
        },
        {
          link: 'Kontakt',
          route: '/contact'
        }
      ]
    }
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
