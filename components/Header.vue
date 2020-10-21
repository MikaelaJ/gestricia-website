<template>
  <v-content>
    <v-app-bar app fixed>
      <v-row justify="center">
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
                  <a class="black--text" v-on="on">
                    {{ one.fields.title }}
                    <v-icon class="black--text">mdi-chevron-down</v-icon>
                  </a>
                </template>
                <v-card tile>
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
                </v-card>
              </v-menu>

              <div
                v-for="(linkaboutus, k) in aboutus"
                :key="`${k}-${linkaboutus.fields.title}`"
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

              <div
                v-for="(linkcontact, j) in contact"
                :key="`${j}-${linkcontact.fields.link}`"
                class=""
              >
                <nuxt-link
                  :to="linkcontact.fields.link"
                  right
                  class="black--text mx-3"
                  >{{ linkcontact.fields.title }}</nuxt-link
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
                <v-icon class="black--text">mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-card
              offset-y
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
                v-for="(linkomoss, j) in aboutus"
                :key="`${j}-${linkomoss.fields.title}`"
                class="pl-4 black--text"
              >
                <nuxt-link :to="linkomoss.fields.link">
                  {{ linkomoss.fields.title }}
                </nuxt-link>
              </v-list>

              <!-- Kontakt -->
              <v-list
                v-for="(linkcontact, j) in contact"
                :key="`${j}-${linkcontact.fields.title}`"
                class="pl-4"
              >
                <nuxt-link :to="linkcontact.fields.link">
                  {{ linkcontact.fields.title }}
                </nuxt-link>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </v-row>
    </v-app-bar>
  </v-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('getroute', ['contact']),
    ...mapState('getroute', ['aboutus']),
    ...mapState('getroute', ['tjanster']),
    ...mapState('getroute', ['dropdownTitle'])
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
