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
              v-for="(linkcontact, i) in contact"
              :key="`${i}-${linkcontact.fields.title}`"
              class=""
            >
              <nuxt-link
                :to="linkcontact.fields.link"
                right
                class="black--text mx-3 translate-width"
                text
                >{{ linkcontact.fields.title }}</nuxt-link
              >
            </div>
            <div
              v-for="(linkaboutus, i) in aboutus"
              :key="`${i}-${linkaboutus.fields.link}`"
              class=""
            >
              <nuxt-link
                :to="linkaboutus.fields.link"
                right
                class="black--text mx-3 translate-width"
                text
                >{{ linkaboutus.fields.title }}</nuxt-link
              >
            </div>
          </v-toolbar-items>
        </div>
      </div>
      <!-- Desktop end -->
      <!-- Mobile start -->
      <div class="hidden-lg-and-up">
        <v-menu offset-y class="black">
          <template v-slot:activator="{ on }">
            <v-btn offset-y icon v-on="on" @click.stop>
              <v-icon class="blue--text">mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-card
            offset-x
            max-width="500"
            min-width="220"
            class="mx-auto lgtbeige"
          >
            <!-- Länkarna-->

            <v-list>
              <v-list-group no-action @click.stop>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title
                      v-for="(titletjanst, i) in dropdownTitle"
                      :key="`${i}-${titletjanst.fields.title}`"
                      class="dropdown-link"
                    >
                      {{ titletjanst.fields.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item-group no-action class="pl-4" @click.stop>
                  <v-list-item
                    v-for="(tjanst, i) in tjanster"
                    :key="`${i}-${tjanst.fields.title}`"
                    tile
                    outer
                    :to="tjanst.fields.link"
                    >{{ tjanst.fields.title }}</v-list-item
                  >
                </v-list-item-group>
              </v-list-group>
            </v-list>

            <!-- Om oss -->
            <v-list
              v-for="(linkaboutus, i) in aboutus"
              :key="`${i}-${linkaboutus.fields.title}`"
              class="pl-4"
            >
              <nuxt-link :to="linkaboutus.fields.link">
                {{ linkaboutus.fields.title }}
              </nuxt-link>
            </v-list>
            <!-- Kontakt -->
            <v-list
              v-for="(linkcontact, i) in contact"
              :key="`${i}-${linkcontact.fields.title}`"
              class="pl-4"
            >
              <nuxt-link :to="linkcontact.fields.link">
                {{ linkcontact.fields.title }}
              </nuxt-link>
            </v-list>
          </v-card>
        </v-menu>
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
    ...mapState('getroute', ['contact']),
    ...mapState('getroute', ['aboutus'])
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
      content_type: 'contact'
    })
    await this.getRoute({
      content_type: 'aboutus'
    })
  },
  methods: {
    ...mapActions('getroute', ['getRoute'])
  }
}
</script>

<style scoped lang="css">
.dropdown-link {
  display: block !important;
}
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
