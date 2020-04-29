<template>
  <div class="container">
    <div>
      <h1 class="title">
        registere {{ !$auth.loggenIn }} {{ $auth.user }}
      </h1>
      <h2 class="subtitle">
        this project is for testing registration and stuff like that later will create a full project
      </h2>
      <RegistereForm />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
const RegistereForm = () => import('../components/RegistereForm')
export default {
  components: {
    RegistereForm
  }
}
</script>

<style>

</style>
