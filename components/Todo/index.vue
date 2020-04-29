<template>
  <b-container>
    <add-todo />
    <todo-list />
  </b-container>
</template>
<script>
const TodoList = () => import('./TodoList')
const AddTodo = () => import('./AddTodo')
export default {
  components: {
    TodoList,
    AddTodo
  }
}
</script>
