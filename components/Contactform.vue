<template>
  <v-content class="pt-0">
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="40"
        label="Namn"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="subject"
        :error-messages="subjectErrors"
        :counter="50"
        label="Ämne"
        required
        @input="$v.subject.$touch()"
        @blur="$v.subject.$touch()"
      ></v-text-field>
      <v-textarea
        v-model="message"
        :error-messages="messageErrors"
        label="Meddelande"
        required
        counter
        :rules="rules"
        dense
        @change="$v.message.$touch()"
        @blur="$v.message.$touch()"
      ></v-textarea>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Godkänn?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4 b3blue Gpink--text" @click="submit">submit</v-btn>
      <v-btn class="white" @click="clear">clear</v-btn>
    </form>
  </v-content>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
/* import { mapState, mapActions } from 'vuex' */
import axios from 'axios'

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(40), minLength: minLength(4) },
    email: { required, email },
    subject: { required },
    message: { required },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },
  data: () => ({
    name: '',
    email: '',
    subject: '',
    message: '',
    checkbox: false,
    // textarea rules
    rules: [(v) => v.length <= 700 || 'Max 700 characters'],
    success: false
  }),
  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    subjectErrors() {
      const errors = []
      if (!this.$v.subject.$dirty) return errors
      !this.$v.subject.required && errors.push('Item is required')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 40 characters long')
      !this.$v.name.minLength &&
        errors.push('Name must be at least 4 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      this.$v.$touch()

      const obj = {
        name: this.$data.name,
        fromEmail: this.$data.email,
        message: this.$data.message,
        subject: this.$data.subject
      }
      const jsonObj = JSON.stringify(obj)
      const validName = this.validAlpha(this.$data.name)
      if (
        obj.name !== '' &&
        this.$v.name.$error !== true &&
        validName !== false &&
        obj.fromEmail !== '' &&
        this.$v.email.$error !== true &&
        obj.message !== '' &&
        this.$v.message.$error !== true &&
        obj.subject !== '' &&
        this.$v.subject.$error !== true &&
        this.$data.checkbox === true &&
        validName === true
      ) {
        const headers = {
          headers: {
            'content-type': 'application/json'
          }
        }
        axios.defaults.headers.post.Accepts = 'application/json'
        axios
          .post(
            'https://api-squadra-web.azurewebsites.net/api/Mail',
            jsonObj,
            headers
          )
          .then(function() {})
          .catch(function(error) {
            console.log('post error', error)
          })
        this.success = true
      } else {
        this.success = false
      }
      this.$emit('save', this.success)
    },
    clear() {
      this.$v.$reset()
      this.$data.name = ''
      this.$data.email = ''
      this.$data.subject = ''
      this.$data.message = ''
      this.$data.checkbox = false
    },
    validAlpha(value) {
      const re = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/
      return re.test(value)
    }
  }
}
// TO DO:
// subject select
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';
</style>
