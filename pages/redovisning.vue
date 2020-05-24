<template>
  <v-container>
    <v-layout>
      <v-responsive>
        <v-img
          :src="require('../assets/img/redovisning-overlay.jpg')"
          max-height="430px"
        >
        </v-img>
      </v-responsive>
      <v-flex>
        <div>
          <h1>Redovisning</h1>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* import VueMarkdown from 'vue-markdown'
import { mapState, mapActions } from 'vuex' */

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
  }
}
</script>

<style lang="scss"></style>
