<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <todo-card :todo="todo" />
      <!-- <b-card :title="todo.header">
        <b-card-text>
          {{ todo.task }}
        </b-card-text>

        <b-card-text>{{ todo.date }}</b-card-text>
      </b-card> -->
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
const TodoCard = () => import('./TodoCard')
export default {
  components: {
    TodoCard
  },
  computed: {
    ...mapState('todos', {
      todos: 'todos'
    })
  }
}
</script>
