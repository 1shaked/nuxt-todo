<template>
  <div>
    <div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse" />

        <b-navbar-brand>BootstrapVue</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">
              Home page
            </b-nav-item>
          </b-navbar-nav>
          <!-- when the user is logged in -->
          <b-navbar-nav v-if="this.$auth.loggedIn" class="ml-auto">
            <b-nav-item @click="$auth.logout('local')">
              Log OUT
            </b-nav-item>
          </b-navbar-nav>
          <!-- when the user is not loged in -->
          <b-navbar-nav v-if="!this.$auth.loggedIn" class="ml-auto">
            <b-nav-item href="/login">
              Log In
            </b-nav-item>
            <b-nav-item href="/registere">
              Registere
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container>
      <nuxt />
    </b-container>
  </div>
</template>
<script>
export default {
  methods: {
    LogOut () {
      this.$auth.logout('local')
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
