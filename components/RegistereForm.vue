<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        />
      </b-form-group>

      <b-form-group
        id="input-group-user-name"
        label="User Name :"
        label-for="input-user-name"
        description="this is the user name field you can call yourself how ever you like"
      >
        <b-form-input
          id="input-user-name"
          v-model="form.username"
          type="text"
          required
          placeholder="Enter username"
        />
      </b-form-group>

      <b-form-group
        id="input-group-phone"
        label="phone number:"
        label-for="input-phone"
        description="this is the best way we can comunicate with you"
      >
        <b-form-input
          id="input-phone"
          v-model="form.phone"
          type="text"
          required
          placeholder="Enter phone"
        />
      </b-form-group>

      <b-form-group id="input-group-password" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-password"
          v-model="form.password"
          required
          type="password"
          placeholder="Enter password"
        />
      </b-form-group>

      <b-button type="submit" variant="primary">
        Submit
      </b-button>
      <b-button type="reset" variant="danger">
        Reset
      </b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">
        {{ form }}
      </pre>
    </b-card>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex'
import axios from '@nuxtjs/axios'
import Vue from 'vue'
export default {
  data () {
    return {
      form: {
        email: '',
        username: '',
        phone: '',
        password: ''
      },
    }
  },
  methods: {
    ...mapActions('users', [
      'login'
    ]),
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        await this.$axios.post('u/auth/users/', {
          email: this.form.email,
          username: this.form.username,
          phone: this.form.phone,
          password: this.form.password
        })
        console.log('connected')
      } catch (error) {
        console.log(error)
      }
      await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })

    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      Vue.set(this, 'form', {})
    }
  }
}
</script>
