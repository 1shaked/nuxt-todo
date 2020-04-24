<template>
  <div class="container">
    <div>
      <h1 class="title">
        login {{ !$auth.loggenIn }} {{ $auth.user }}
      </h1>
      <h2 class="subtitle">
        this project is for testing registration and stuff like that later will create a full project
      </h2>
      <LogInForm />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
const LogInForm = () => import('../components/LogInForm')
export default {
  components: {
    LogInForm
  },
  computed: {
    ...mapState('users', [
      'user'
    ])
  }
}
</script>

<style>

</style>
