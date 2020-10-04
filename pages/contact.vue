<template>
  <v-row class="Ggrey">
    <v-container class="white my-10 px-10">
      <v-row>
        <v-col cols="12" md="5" class="mx-auto">
          <v-responsive>
            <v-img :src="require('../assets/img/multi.png')"></v-img>
          </v-responsive>
        </v-col>
        <v-col md="1">
          <div class="vl"></div>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="mx-auto">
          <v-row>
            <v-col cols="12" sm="5" md="5">
              <p>
                Gestricia Redovisning AB <br />
                Kryddstigen 20b <br />
                80 292 Gävle <br />
              </p>
            </v-col>
            <v-col cols="12" sm="5" md="5">
              <p>
                tobias@gestricia.se <br />
                +46 (0)72 200 02 41
              </p>
            </v-col>
            <v-col cols="12" sm="2" md="2">
              <v-responsive>
                <v-img :src="require('../assets/img/stamp.svg')"></v-img>
              </v-responsive>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <div class="ma-auto">
                <ContactForm
                  v-if="!submitSuccess"
                  @save="saveSuccess"
                ></ContactForm>
                <transition name="flip" mode="out-in">
                  <div v-if="submitSuccess" class="text-center work-sans">
                    <h2>Your message has been sent.</h2>
                  </div>
                </transition>
                <div v-if="submitSuccess" class="success-checkmark">
                  <div class="check-icon">
                    <span class="icon-line line-tip"></span>
                    <span class="icon-line line-long"></span>
                    <div class="icon-circle"></div>
                    <div class="icon-fix"></div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
/* import VueMarkdown from 'vue-markdown' */
import { mapActions } from 'vuex'
import ContactForm from '../components/Contactform'

export default {
  components: {
    ContactForm
    /* VueMarkdown */
  },
  data() {
    return {
      submitSuccess: false,
      isShowing: false
    }
  },

  /* computed: {
    ...mapState('getpage', ['contact'])
  },
  async created() {
    await this.getPage({
      content_type: 'contact',
      order: '-sys.createdAt'
    })
  },
  methods: {
    ...mapActions('getpage', ['getPage'])
  } */
  methods: {
    ...mapActions('getpages', ['getPages']),
    saveSuccess(success) {
      this.submitSuccess = success
    }
  },
  head() {
    return {
      title: 'Kontakt'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 0.84em;
}
.vl {
  border-left: 1px solid black;
  height: 550px;
  margin-left: 30px;
}

/* ––––––––––––––––––––– */

.display-flex {
  display: flex;
}

.flip-enter-active {
  transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
}

.flip-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter,
.flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

.success-checkmark {
  width: 90px;
  height: 90px;
  margin: 50px auto;

  .check-icon {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid white;

    &::before {
      top: 3px;
      left: -2px;
      width: 30px;
      transform-origin: 100% 50%;
      border-radius: 100px 0 0 100px;
    }

    &::after {
      top: 0;
      left: 30px;
      width: 60px;
      transform-origin: 0 50%;
      border-radius: 0 100px 100px 0;
      animation: rotate-circle 4.25s ease-in;
    }

    &::before,
    &::after {
      content: '';
      height: 100px;
      position: absolute;
      transform: rotate(-45deg);
    }

    .icon-line {
      height: 5px;
      background-color: white;
      display: block;
      border-radius: 2px;
      position: absolute;
      z-index: 10;

      &.line-tip {
        top: 46px;
        left: 14px;
        width: 25px;
        transform: rotate(45deg);
        animation: icon-line-tip 0.75s;
      }

      &.line-long {
        top: 38px;
        right: 8px;
        width: 47px;
        transform: rotate(-45deg);
        animation: icon-line-long 0.75s;
      }
    }

    .icon-circle {
      top: -4px;
      left: -4px;
      z-index: 10;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      box-sizing: content-box;
      border: 4px solid white;
    }

    .icon-fix {
      top: 8px;
      width: 5px;
      left: 26px;
      z-index: 1;
      height: 85px;
      position: absolute;
      transform: rotate(-45deg);
    }
  }
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

/* ––––––––––––––––––––– */
</style>
