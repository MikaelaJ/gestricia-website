<template>
  <v-app>
    <Header />
    <v-container class="pa-0" fluid>
      <nuxt />
    </v-container>

    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  }
}
</script>
