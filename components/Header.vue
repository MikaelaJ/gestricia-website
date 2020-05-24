<template>
  <v-content app class="overflow-hidden">
    <v-app-bar app fixed color="#ffffff" dark shrink-on-scroll>
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
      <div v-for="menu_item in menu" :key="menu_item.link">
        <v-btn large class="black--text" :to="menu_item.route" text>{{
          menu_item.link
        }}</v-btn>
      </div>
    </v-app-bar>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          link: 'Tjänster',
          route: '/tjanster'
        },
        {
          link: 'Om Gestricia',
          route: '/omgestricia'
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

<style lang="scss"></style>
