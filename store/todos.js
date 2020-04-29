import Vue from 'vue'
import {
  ADD_TODO,
  CLEAR_TODOS,
  SET_TODOS,
  SET_CURRENT_TODO,
  DELETE_TODO
} from '../Mutations/todos'
export const state = () => ({
  todos: [
    {
      id: 7,
      header: 'another todo 2',
      task: 'example ss',
      date: '2020-04-28',
      user: 1
    }
  ],
  current_todo: 0
})
export const getters = {
  todo (state) {
    return state.todos[state.current_todo]
  }
}
export const mutations = {
  [ADD_TODO] (state, todo) {
    state.todos.push(todo)
    this.$axios.post('u/todos/', {
      ...todo,
      user: this.$auth.user.id
    })
  },
  [CLEAR_TODOS] (state) {
    Vue.set(state, 'todos', [])
  },
  [SET_TODOS] (state, todos) {
    Vue.set(state, 'todos', todos)
  },
  [SET_CURRENT_TODO] (state, index) {
    state.current_todo = index
  },
  [DELETE_TODO] (state, index) {
    state.todos.splice(index, 1)
  }
}
export const actions = {
  async GetTodos ({ commit }) {
    await this.$axios.get('u/todos/', {
      params: {
        user: this.$auth.user.id
      }
    }).then((respond) => {
      commit(SET_TODOS, respond.data)
    })
  },
  async GetTodo ({ commit }, id) {
    await this.$axios.get(`u/todo-view/${id}/`)
      .then((respond) => {
        commit(SET_TODOS, [respond.data])
        commit(SET_CURRENT_TODO, 0)
      })
  },
  async DeleteTodo ({ commit, state }, id) {
    await this.$axios.delete(`u/todo-view/${id}/`)
      .then((respond) => {
        if (respond.status === 204) {
          const index = state.todos.findIndex(todo => todo.id === id)
          commit(DELETE_TODO, index)
        }
      })
  }
}
