<template>
  <b-card class="card" :style="TodoStyle" :title="todo.header">
    <nuxt-link v-if="$route.name === 'todos'" :to="'todos/' + todo.id">
      <b-card-text>{{ todo.date }}</b-card-text>
    </nuxt-link>
    <b-card-text v-else>
      {{ todo.date }}
    </b-card-text>

    <b-card-text>
      <slot name="task" />
    </b-card-text>

    <b-card-footer>
      <b-button variant="danger" @click="DELETE">
        DELETE
      </b-button>
    </b-card-footer>
  </b-card>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
      default () {
        return {

        }
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    TodoStyle () {
      return {
        'background-color': this.todo.background || '#FFFFFF',
        color: this.todo.color || '#000000'
      }
    }
  },
  methods: {
    ...mapActions('todos', {
      DeleteTodo: 'DeleteTodo'
    }),
    ...mapMutations('todos', [
      'SET_CURRENT_TODO'
    ]),
    DELETE () {
      this.DeleteTodo(this.todo.id)
      if (this.$route.name === 'todos-id') {
        // go to the main todo page
        this.$router.push('/todos/')
      }
    }
  }
}
</script>
<style lang="scss">
.card {
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-shadow: 10px 10px 5px grey;
  border-radius: 20px;
  margin: 5px;
}
</style>
