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

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
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
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        email: 'test@gmail.com',
        password: 'rps1+isq=3'
      }
    }
  },
  methods: {
    ...mapActions('users', [
      'login'
    ]),
    onSubmit (evt) {
      evt.preventDefault()
      try {
        this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
        console.log('connected')
      } catch (error) {
        console.log(error)
      }

    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
    }
  }
}
</script>
