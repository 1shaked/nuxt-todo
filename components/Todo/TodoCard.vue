<template>
  <b-card :style="TodoStyle" :title="todo.header">
    <nuxt-link :to="'todos/' + todo.id">
      <b-card-text>{{ todo.date }}</b-card-text>
    </nuxt-link>

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
      if (this.$route.fullPath !== '/todos') {
        // go to the main todo page
        this.$router.push('/todos/')
      }
    }
  }
}
</script>
