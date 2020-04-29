<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-header" label="Your header:" label-for="input-header">
        <b-form-input
          id="input-header"
          v-model="form.header"
          required
          placeholder="Enter header"
        />
      </b-form-group>

      <b-form-group id="input-group-task" label="Your task" label-for="task">
        <b-form-textarea
          id="task"
          v-model="form.task"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        />
      </b-form-group>

      <b-form-group id="input-group-date" label="Your date:" label-for="input-date">
        <div>
          <label for="example-datepicker">Choose a date</label>
          <b-form-datepicker id="example-datepicker" v-model="form.date" class="mb-2" />
          <p>Value: '{{ form.date }}'</p>
        </div>
      </b-form-group>

      <b-button type="submit" variant="primary">
        Add Todo
      </b-button>
      <!-- <b-button type="reset" variant="danger">
        Reset Todos
      </b-button> -->
    </b-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {
        header: '',
        task: '',
        date: ''
      }
    }
  },
  methods: {
    ...mapMutations('todos', [
      'ADD_TODO'
    ]),
    onSubmit (evt) {
      evt.preventDefault()
      this.ADD_TODO(this.form)
    },
    onReset (evt) {
      evt.preventDefault()
      Vue.set(this, 'form', {})
    }
  }
}
</script>
