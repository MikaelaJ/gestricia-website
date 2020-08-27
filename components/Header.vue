<template>
  <v-content app class="overflow-hidden">
    <v-app-bar app fixed color="#ffffff" dark>
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>
      <nuxt-link to="/">
        <v-responsive>
          <v-img
            :src="require('../assets/img/logo.png')"
            max-width="50px"
          ></v-img>
        </v-responsive>
      </nuxt-link>

      <v-spacer></v-spacer>

      <div md="10" class="hidden-md-and-down">
        <div>
          <v-toolbar-items class="pr-4 pt-5">
            <v-menu
              v-for="(one, i) in dropdownTitle"
              :key="`${i}-${one.fields.title}`"
              offset-y
            >
              <template v-slot:activator="{ on }">
                <a class="black--text translate-width" v-on="on">
                  {{ one.fields.title }}
                  <v-icon class="black--text">mdi-chevron-down</v-icon>
                </a>
              </template>
              <v-list class="Ggrey">
                <v-list-item
                  v-for="(tjanst, index) in tjanster"
                  :key="`${index}-${tjanst.fields.link}`"
                  tile
                  outer
                  :to="tjanst.fields.link"
                >
                  <v-list-item-title tile class="white--text">{{
                    tjanst.fields.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <div
              v-for="(link, i) in links"
              :key="`${i}-${link.fields.link}`"
              class=""
            >
              <nuxt-link
                :to="link.fields.link"
                right
                class="black--text mx-3 translate-width"
                text
                >{{ link.fields.title }}</nuxt-link
              >
            </div>
          </v-toolbar-items>
        </div>
      </div>
    </v-app-bar>
  </v-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      menu: [
        {
          link: 'Tjänster',
          route: '/tjanster'
        },
        {
          link: 'Kontakt',
          route: '/contact'
        },
        {
          link: 'Om Gestricia',
          route: '/omgestricia'
        }
      ]
    }
  },
  computed: {
    ...mapState('getroute', ['dropdownTitle']),
    ...mapState('getroute', ['tjanster']),
    ...mapState('getroute', ['links'])
  },
  async created() {
    await this.getRoute({
      content_type: 'tjanster',
      order: '-sys.createdAt'
    })
    await this.getRoute({
      content_type: 'dropdownTitle',
      order: '-sys.createdAt'
    })
    await this.getRoute({
      content_type: 'links',
      order: '-sys.createdAt'
    })
  },
  methods: {
    ...mapActions('getroute', ['getRoute'])
  }
}
</script>

<style scoped lang="css">
@media screen and (max-width: 959px) {
  a {
    text-decoration: none !important;
    color: black !important;
    font-size: 1em;
  }
  a:visited {
    text-decoration: none !important;
    color: black !important;
  }
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: black !important;
  }
}
</style>
