<template>
  <b-card :title="todo.header">
    <b-card-text>{{ todo.date }}</b-card-text>

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
import { mapActions } from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
      default () {
        return {

        }
      }
    }
  },
  methods: {
    ...mapActions('todos', {
      DeleteTodo: 'DeleteTodo'
    }),
    DELETE () {
      this.DeleteTodo(this.todo.id)
      if (this.$route.fullPath !== '/todos') {
        // go to the main todo page
        this.$router.push('/todos/')
      }
    }
  }
}
</script>
