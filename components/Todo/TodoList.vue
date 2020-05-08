<template>
  <div>
    <div v-for="(todo, index) in todos" :key="todo.id">
      <todo-card :todo="{ ...todo, index }" />
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
