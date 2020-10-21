<template>
  <v-app>
    <Header />
    <v-container class="pa-0" fluid>
      <Nuxt />
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

<style lang="scss">
@import '../assets/style.scss';
</style>
