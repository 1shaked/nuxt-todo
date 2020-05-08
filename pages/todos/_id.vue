<template>
  <div class="container">
    <div>
      <no-ssr>
        <todo-card :todo="todo">
          <template v-slot:task>
            <h1>{{ todo.task }}</h1>
          </template>
        </todo-card>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const TodoCard = () => import('../../components/Todo/TodoCard')
export default {
  middleware: 'auth',
  components: {
    TodoCard
  },
  async fetch ({ store, params, from }) {
    const isInitPath = !from
    if (isInitPath) {
      await store.dispatch('todos/GetTodo', params.id)
    } else {
      const index = store.state.todos.todos.findIndex(todo => todo.id === parseInt(params.id))
      await store.commit('todos/SET_CURRENT_TODO', index)
    }
  },
  computed: {
    ...mapGetters('todos', [
      'todo'
    ])
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
